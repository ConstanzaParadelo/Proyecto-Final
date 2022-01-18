import React from 'react';
import '../../styles/components/layout/Header.css'
const Header = (props) => {
    return(
        <header className="container-fluid bg-success d-flex justify-content-center">
             <p className="text-light mb-0 p-2 fs-4 fw-bold">
              Decires Equipo Interdisciplinario
            </p>
        </header>
    );
}
export default Header;