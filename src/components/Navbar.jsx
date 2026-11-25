export default function Navbar({ copy, nextLanguage, onSwitchLanguage }) {
  return (
    <header className="site-header">
      <nav className="container site-nav" aria-label={copy.label}>
        <a className="brand" href="#home" aria-label={copy.home}>Phan Sơn Bảo</a>
        <div className="nav-links">
          <a href="#projects">{copy.work}</a>
          <a href="#about">{copy.about}</a>
          <a href="#contact">{copy.contact}</a>
          <button
            className="language-switch"
            type="button"
            onClick={onSwitchLanguage}
            aria-label={copy.switchLanguage}
            title={copy.switchLanguage}
          >
            {nextLanguage === 'en' ? (
              <svg className="language-flag" viewBox="0 0 60 40" aria-hidden="true" focusable="false">
                <path fill="#da251d" d="M0 0h60v40H0z" />
                <path fill="#ff0" d="m30 8 2.9 8.8h9.2l-7.5 5.4 2.9 8.8-7.5-5.4-7.5 5.4 2.9-8.8-7.5-5.4h9.2z" />
              </svg>
            ) : (
              <svg className="language-flag" viewBox="0 0 60 36" aria-hidden="true" focusable="false">
                <path fill="#012169" d="M0 0h60v36H0z" />
                <path stroke="#fff" strokeWidth="7" d="m0 0 60 36m0-36L0 36" />
                <path fill="#c8102e" d="M0 0v2l30 18v-2zM60 0h-4L30 15v3zM60 36v-2L30 16v2zM0 36h4l26-15v-3z" />
                <path stroke="#fff" strokeWidth="12" d="M30 0v36M0 18h60" />
                <path stroke="#c8102e" strokeWidth="7" d="M30 0v36M0 18h60" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

