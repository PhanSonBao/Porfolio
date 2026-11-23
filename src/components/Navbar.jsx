export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container site-nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Phan Son Bao, home">PSB<span>.</span></a>
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}

