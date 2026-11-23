export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <p className="eyebrow">Full Stack .NET Developer</p>
      <h1 id="hero-title">I build software for <em>real business workflows.</em></h1>
      <p className="hero-description">
        I'm Phan Son Bao. I build business applications and SaaS features, from C# APIs and SQL Server to React interfaces.
      </p>
      <div className="actions">
        <a href="#projects" className="button">Explore my work <span aria-hidden="true">↓</span></a>
        <a className="text-link" href={import.meta.env.BASE_URL + 'resume.pdf'} download="Phan-Son-Bao-CV.pdf">Download CV</a>
      </div>
    </section>
  )
}

