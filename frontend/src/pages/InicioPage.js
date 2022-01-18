import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/components/pages/InicioPage.css";

const InicioPage = (props) => {
  return (
    <main>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="img-responsive "
            src="IMG/Decires1.jpeg"
            className="rounded mx-auto d-block"
            alt="Decires1"
            id="Comienzo"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-responsive "
            src="IMG/equipo.png"
            className="rounded mx-auto d-block"
            alt="Decires2"
            id="Comienzo"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-responsive "
            src="IMG/Decires3.png"
            className="rounded mx-auto d-block"
            alt="Decires3"
            id="Comienzo"
          />
        </Carousel.Item>
      </Carousel>

      <section class="w-50 mx-auto text-center pt-5">
        <h1 class="p-3 fs-2 border-top border-3">
          <span class="text-success">Decires</span> es un espacio de trabajo
          interdisciplinario y multiprofesional que busca brindar a nuestros
          pacientes una mejor calidad de vida.
        </h1>
      </section>
      <section>
        <div className="w-50 m-auto text-center">
          <h1>
            <span className="text-success fs-3 fw-bold">Nuestro Espacio</span>
          </h1>
          <p className="fs-4">
            {" "}
            Contamos con diferentes consultorios, totalmente equipados para
            brindar una atención integral y acorde a la necesidades de cada
            persona.{" "}
          </p>
        </div>
      </section>
      <div className="contaniner">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-2 col-lg-2">
            <img src="IMG/1 (1).png" class="card-img-top" alt="consul1" />
          </div>
          <div className="col-12 col-md-2 col-lg-2">
            <img src="IMG/2.png" class="card-img-top" alt="consul2" />
          </div>
          <div className="col-12 col-md-2 col-lg-2">
            <img src="IMG/3.png" class="card-img-top" alt="consul3" />
          </div>
        </div>
      </div>
      <div className="w-50 m-auto text-center" id="equipo">
        <h1>
          <span className="text-success fs-3 fw-bold">Nuestros Servicios</span>
        </h1>
        <p className="fs-4">
          Brindamos atención psicológica, fonoaudiológica, psicopedagogica y
          acompañamiento tanto terapeutico como educativo.{" "}
        </p>
      </div>
    </main>
  );
};

export default InicioPage;
