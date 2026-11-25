export default function Footer({ heading }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-content">
        <div>
          <h2>{heading}</h2>
          <div className="footer-contact">
            <a href="tel:+84974607127">0974.607.127</a>
            <a href="mailto:psonbao@gmail.com">psonbao@gmail.com</a>
          </div>
        </div>
        <ul className="footer-links">
          <li><a href="https://github.com/PhanSonBao">GitHub</a></li>
          <li><a href="https://linkedin.com/in/phansonbao/">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  )
}
