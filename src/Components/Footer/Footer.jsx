import React from 'react'
import './footer.css'

function Footer() {
    return (
    <div className="footer">
        <h1 className='sloganFooter'>Alimentos 100% <br />Naturales</h1>
        <div className="contact">
        <a href="https://www.instagram.com/_cookpets_/" target='blank' ><i class="ri-instagram-line"></i> </a>
        <a href="https://www.facebook.com/profile.php?id=100076581402873"target='blank'><i class="ri-facebook-fill"></i></a>
        <a href="https://api.whatsapp.com/send/?phone=573108580916&text&type=phone_number&app_absent=0" target='blank'><i class="ri-whatsapp-line"></i></a>
        <i class="ri-copyright-line"></i>
        </div>
        
    </div>);
};

export default Footer;