import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { projects } from './data/project.js'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" className="container">
        <Hero />

        <section id="projects" className="section" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="approach" className="section approach" aria-labelledby="approach-title">
          <h2 id="approach-title">How I work</h2>
          <div>
            <h3>Extend existing systems carefully</h3>
            <p>When adding features to an existing ASP.NET application, I work within established service contracts and use API testing to troubleshoot integration issues.</p>
          </div>
          <div>
            <h3>Keep business logic separate</h3>
            <p>In my warehouse project, I separated inventory use cases from persistence and used Code First migrations to track schema changes.</p>
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <div>
            <h2 id="about-title">About me</h2>
            <p>I'm Phan Son Bao, a Full Stack .NET Developer based in Ho Chi Minh City. I studied Software Engineering at HUFLIT.</p>
          </div>
          <div className="experience">
            <h3>Full Stack .NET Developer · VNDC Technology</h3>
            <p className="meta">Sep 2025 – Present</p>
            <p>I develop and maintain business applications and SaaS features, working across REST APIs, React interfaces, and SQL Server. I collaborate with product managers and developers to clarify requirements and resolve integration issues.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

