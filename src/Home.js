import googlePlay from "./img/get_it_on_google_play.png";
import appStore from "./img/get_it_on_app_store.png";
import johoLogIn from "./img/joho-log-in.png";

const Home = () => (
  <section className="home main-section" id="home">
    <div className="home-content">
      <div className="home-content-title">
        <h1>
          Confía en Joho y deja que la <i>información</i> trabaje para <i>ti</i>
        </h1>
      </div>
      <div className="home-content-text">
        <h5>
          Joho es la mejor herramienta para gestionar información de atención en
          el rubro de la orientación psicológica y psicopedagógica.
          <h5>
            Contáctanos y recibe una solución personalizada, diseñada para
            optimizar al máximo el flujo de trabajo de tu equipo.
          </h5>
        </h5>
      </div>
      <div className="home-content-download">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="home-content-download-item"
        >
          <img
            src={googlePlay}
            alt="Descarga en Google Play"
            className="home-content-download-img"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="home-content-download-item"
        >
          <img
            src={appStore}
            alt="Descarga en la App Store"
            className="home-content-download-img"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="home-content-download-item"
        >
          <button className="home-content-download-btn">Inicia sesión</button>
        </a>
      </div>
    </div>
    <div className="home-product-img">
      <img
        src={johoLogIn}
        alt="Captura de una sección de una interfaz móvil de una solución organizacional Joho."
      />
    </div>
  </section>
);

export default Home;
