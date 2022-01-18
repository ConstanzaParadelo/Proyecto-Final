import React from 'react';
import '../../styles/components/layout/Footer.css'
const Footer = (props) => {
    return(
    
        <footer className="d-flex justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">       
          <span className="text-light mb-0 p-2 fs-5 fw-bold">&copy; 2021 - Decires</span>
        </div>
       </footer> 
      
    );
}

export default Footer;