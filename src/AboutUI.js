import johoDocumentView from "./img/joho-document-view.png";
import johoDocumentMetadata from "./img/joho-document-metadata.png";

const AboutUI = () => (
  <section className="about main-section" id="about">
    <div className="about-section-product">
      <div className="about-section-product-img">
        <img
          src={johoDocumentView}
          alt="Interfaz móvil de una aplicación Joho con los campos de un documento."
        />
      </div>
      <div className="about-section-product-img">
        <img
          src={johoDocumentMetadata}
          alt="Interfaz móvil de una aplicación Joho con la metadata de un documento."
        />
      </div>
    </div>
    <div className="about-section-item card">
      <h2>Visualiza tus documentos dentro de la aplicación.</h2>
      <p>
        Joho es una solución completa, diseñada para acompañar todo tu flujo de
        gestión de información sin que necesites salir de la aplicación. El
        diseño es minimalista y enfocado al contenido.
      </p>
      <p>
        Además, también se puede implementar de forma sencilla la visualización
        de la metadata en otra pestaña, de modo que sea accesible sin distraer
        del contenido.
      </p>
    </div>
  </section>
);

export default AboutUI;
