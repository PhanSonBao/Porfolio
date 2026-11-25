import { useEffect, useState } from 'react'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { projects, vietnameseProjects } from './data/project.js'
import { translations } from './data/translations.js'

const languageStorageKey = 'portfolio-language'

function readLanguage() {
  try {
    return localStorage.getItem(languageStorageKey) === 'vi' ? 'vi' : 'en'
  } catch {
    return 'en'
  }
}

export default function App() {
  const [language, setLanguage] = useState(readLanguage)
  const copy = translations[language]
  const nextLanguage = language === 'en' ? 'vi' : 'en'

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.pageDescription)
  }, [language, copy])

  function switchLanguage() {
    setLanguage(nextLanguage)
    try {
      localStorage.setItem(languageStorageKey, nextLanguage)
    } catch {
      // The active language still changes if browser storage is unavailable.
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">{copy.skipLink}</a>
      <Navbar copy={copy.nav} nextLanguage={nextLanguage} onSwitchLanguage={switchLanguage} />
      <main id="main" className="container">
        <Hero copy={copy.hero} />

        <section id="projects" className="section" aria-labelledby="work-title">
          <h2 id="work-title">{copy.work.title}</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={language === 'vi' ? { ...project, ...vietnameseProjects[project.id] } : project}
                copy={copy.work}
              />
            ))}
          </div>
        </section>

        <section id="approach" className="section approach" aria-labelledby="approach-title">
          <h2 id="approach-title">{copy.approach.title}</h2>
          <div>
            <h3>{copy.approach.extendTitle}</h3>
            <p>{copy.approach.extendDescription}</p>
          </div>
          <div>
            <h3>{copy.approach.separateTitle}</h3>
            <p>{copy.approach.separateDescription}</p>
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <div>
            <h2 id="about-title">{copy.about.title}</h2>
            <p>{copy.about.bio}</p>
          </div>
          <div className="experience">
            <h3>{copy.about.position}</h3>
            <p className="meta">{copy.about.period}</p>
            <p>{copy.about.experience}</p>
          </div>
        </section>
      </main>
      <Footer heading={copy.contact} />
    </>
  )
}

