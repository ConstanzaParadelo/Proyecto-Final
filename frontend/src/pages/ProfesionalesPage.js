import React from 'react';
import '../styles/components/pages/ProfesionalesPage.css'

const ProfesionalesPage = (props) => {
    return(
        <main class="container">
      <div>
        <h2>Equipo de Profesionales</h2>
        <h4><em>En Decires contamos con un Staff de profesionales de diferentes disciplinas Psicologia, Psicopedagogía, Fonoaudiologia, Psicomotricidad, Nutrición.</em>
        </h4>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 border border-5 border-success">
            <div class="card-header bg-transparent border-success">Lic. Daniela Mainero</div>
            <img src="IMG/dani.png" class="rounded mx-auto d-block" alt="Daniela Mainero"/>
            <div class="card-body">
              <h5 class="card-title">Lic. en Psicología</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border border-5 border-success">
            <div class="card-header bg-transparent border-success">Lic. Florencia Mainero</div>
            <img src="IMG/flor.png" class="rounded mx-auto d-block" alt="Florencia Mainero"/>
            <div class="card-body">
              <h5 class="card-title">Lic. en Psicología</h5>
              <p class="card-text">TThis is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border border-5 border-success">
            <div class="card-header bg-transparent border-success">Lic. Julieta Vergara</div>
            <img src="IMG/juli.png" class="rounded mx-auto d-block" alt="Julieta Vergara"/>
            <div class="card-body">
              <h5 class="card-title">Lic. en Fonoaudiología</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border border-5 border-success">
            <div class="card-header bg-transparent border-success">Lic. Marina Soto</div>
            <img src="IMG/mari.png" class="rounded mx-auto d-block" alt="Marina Soto"/>
            <div class="card-body">
              <h5 class="card-title">Lic. en Psicopedagogía</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border border-5 border-success">
            <div class="card-header bg-transparent border-success">Lic. Constanza Paradelo</div>
            <img src="IMG/coty.jpg" class="rounded mx-auto d-block" alt="Constanza Paradelo"/>
            <div class="card-body">
              <h5 class="card-title">Lic. en Psicología</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border border-5 border-success">
            <div class="card-header bg-transparent border-success">Lic. Melanie Rodriguez</div>
            <img src="IMG/meli.png" class="rounded mx-auto d-block" alt="Melanie Rodriguez"/>
            <div class="card-body">
              <h5 class="card-title">Lic. en Fonoaudiología</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </main>   
   
        );
    }
    
    export default ProfesionalesPage;