import pastSearch from "./img/joho-past-search.png";
import searchResults from "./img/joho-search-results.png";

const AboutSearch = () => (
  <section className="about main-section" id="about">
    <div className="about-section-product">
      <div className="about-section-product-img">
        <img
          src={pastSearch}
          alt="Interfaz móvil de una aplicación Joho con listado de búsquedas pasadas y opción de ordenamiento cronológico"
        />
      </div>
      <div className="about-section-product-img">
        <img
          src={searchResults}
          alt="Interfaz móvil de una aplicación Joho con los resultados de una búsqueda."
        />
      </div>
    </div>
    <div className="about-section-item card">
      <h2>Encontrar información nunca fue más fácil.</h2>
      <h3>
        Accede a un motor de búsqueda personalizado que se adapta a tus
        necesidades.
      </h3>
      <p>
        Joho te proporciona funcionalidades de búsqueda confeccionadas
        personalmente para las necesidades de tu equipo, optimizando
        notablemente el flujo de trabajo.
      </p>
      <h3>Retoma rápidamente desde donde te quedaste.</h3>
      <p>
        Joho te permite visualizar tus búsquedas más recientes, e incluso
        cambiar el orden para revisar las búsquedas realizadas el iniciar sesión
        en la aplicación por primera vez.
      </p>
    </div>
  </section>
);

export default AboutSearch;
