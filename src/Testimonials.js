import profile from "./img/profile-pic.png";
export function Testimonials() {
  return (
    <section className="testimonials main-section" id="testimonials">
      <h2 className="testimonial__title">Testimonios</h2>
      <div className="testimonial__container">
        <div className="testimonial__card">
          <h2 className="testimonial__card__name">Jorge Luis Diaz Flores</h2>
          <div className="testimonial__card__texts">
            <img
              src={profile}
              alt=""
              className="testimonial__card__img"
            />
            <p className="testimonial__card__paragraph">
              Actualmente, voy cursando el 3 er ciclo de mi carrera en la UPC,
              desde que empecé con mis estudios presente signos de estres y
              ansiedad, por la diferencia que habia con el colegio, pero cuando
              realicé mi cita en el centro de orientación psicopedagógica, vi
              que tomaban mi problema con seriedad y en cada cita sentía iba
              mejorando, gracias a la organización que tenían de mis datos, al
              final me enteré que la aplicación que utilizaban era Joho,
              desarrollada por estudiantes de la UPC.
            </p>
          </div>
        </div>
      <div className="testimonial__card">
        <h2 className="testimonial__card__name">
          Juan Aquiles Barrenechea Vida
        </h2>
        <div className="testimonial__card__texts">
          <img
            src={profile}
            alt=""
            className="testimonial__card__img"
            />
          <p className="testimonial__card__paragraph">
            Soy egresado de la universidad y cuando recuerdo los problemas que
            pasé durante ese ciclo de mi vida, tratando de buscar una solución a
            mis ataques de ansiedad cuando realizaba una exposición o aquellas
            veces en las que no podía concentrarme y enfocarme en mis estudios.
            Las primeras sesiones que tuve en el centro de orientacin
            psicopedagógica de la universidad, dejaron mucho que desear, aunque
            después de unos ciclos volví a asistir a una sesión y vi un gran
            cambio en el manejo de la información de los estudiantes y el nivel
            de satisfacción que muchos de mis compañeros tenian frente a este
            servicio, todo gracias a la aplicacion Joho.
          </p>
        </div>
      </div>
      <div className="testimonial__card">
        <h2 className="testimonial__card__name">Mariela Flores</h2>
        <div className="testimonial__card__texts">
          <img
            src={profile}
            alt=""
            className="testimonial__card__img"
            />
          <p className="testimonial__card__paragraph">
            Soy profesional del area psicopedagógica de la Universidad Peruana
            de Ciencias Aplicadas, gracias a la implementacón de JOHO, hemos
            podido mejorar el desempeño de nuestro equipo, teniendo un mejor
            control de las atenciones que realizamos a los alumnos, y una mejor
            evaluación de su progreso a lo largo de los distintos semestres,
            realmente recomendado.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
