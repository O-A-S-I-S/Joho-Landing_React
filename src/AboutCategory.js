import categoryResults from "./img/joho-category-results.png";
import searchFilter from "./img/joho-search-filter.png";

const AboutCategory = () => (
  <section className="about main-section" id="about">
    <div className="about-section-item card">
      <h2>Explora tus documentos por categorías definidas por ti.</h2>
      <p>
        En cualquier organizador de información, puedes explorar los documentos
        por su tipo (documentos de texto, hojas de cálculo, etc). Con Joho, tú
        puedes definir las categorías que existen y explorarlas a placer.
      </p>
      <p>
        Las categorías se introducen transversalmente a la aplicación,
        intuitivamente existe una sección donde puedes ver todos los documentos
        por categoría. Adicionalmente, se presenta la posibilidad de aplicar
        filtros a las búsquedas, para focalizar la categoría o categorías más
        relevante(s) para la investigación que se esté realizando.
      </p>
    </div>
    <div className="about-section-product">
      <div className="about-section-product-img">
        <img
          src={categoryResults}
          alt="Interfaz móvil de una aplicación Joho con listado de documentos por categoría."
        />
      </div>
      <div className="about-section-product-img">
        <img
          src={searchFilter}
          alt="Interfaz móvil de una aplicación Joho con un popup para filtar los resultados de una búsqueda."
        />
      </div>
    </div>
  </section>
);

export default AboutCategory;
