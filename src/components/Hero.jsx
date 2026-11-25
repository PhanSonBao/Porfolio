export default function Hero({ copy }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <p className="eyebrow">{copy.role}</p>
      <h1 id="hero-title">{copy.title} <em>{copy.emphasis}</em></h1>
      <p className="hero-description">{copy.description}</p>
      <div className="actions">
        <a href="#projects" className="button">{copy.explore} <span aria-hidden="true">↓</span></a>
        <a className="text-link" href={import.meta.env.BASE_URL + 'resume.pdf'} download="PhanSonBao_Sofware_Devloper.pdf">{copy.download}</a>
      </div>
    </section>
  )
}

