import React from 'react';
import '../../styles/components/layout/Nav.css'

import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = (props) => {
    return(
      <>
         <Navbar collapseOnSelect expand='sm' bg='light' variant='light'>
           <Container>
             <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
               <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                  <Nav.Link href='/'>Inicio</Nav.Link>
                  <Nav.Link href='/historia'>Historia</Nav.Link>
                  <Nav.Link href='/profesionales'>Profesionales</Nav.Link>
                  <Nav.Link href='/novedades'>Novedades</Nav.Link>
                  <Nav.Link href='/contacto'>Contacto</Nav.Link>
                </Nav>
               </Navbar.Collapse>
           </Container>
         </Navbar>
        </> 
       
         
     
       
    );
}

export default Navigation;