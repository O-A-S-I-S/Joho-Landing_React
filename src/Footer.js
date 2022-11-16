const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-col social-media">
        <h2>¿Interesad@?</h2>
        <p>Síguenos en nuestras redes sociales:</p>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="social-media-link"
            >
              <i
                style={{ color: "white" }}
                className="fa-brands fa-twitter"
              ></i>
              {" twitter.com/joho"}
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="social-media-link"
            >
              <i
                style={{ color: "white" }}
                className="fa-brands fa-facebook"
              ></i>
              {" facebook.com/joho"}
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="social-media-link"
            >
              <i
                style={{ color: "white" }}
                className="fa-brands fa-instagram"
              ></i>
              {" instagram.com/joho"}
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-col contact">
        <h2>Contáctanos</h2>
        <ul>
          <li>
            Lima, Perú
            <br />
            <i>Calle El Oasis 182</i>
          </li>
          <li>
            <b>joho@oasis.org</b>
          </li>
        </ul>
      </div>
      <div className="footer-col suscription">
        <h2>Suscríbete</h2>
        <p>Recibe las últimas novedades:</p>
        <input
          type="email"
          name="contact-email"
          id="contact-email"
          placeholder="^ tu correo ^"
        />
        <button className="contact-email-btn" type="submit">
          Registrar
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
