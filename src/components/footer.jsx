import React from 'react';

const Footer = () => {
  return (
    <div>
    <div className="review">
        <img src='images/review.png' ></img>
        </div> 
    <div className='screenF'>
    <div className='footers'>   
        <img src="images/logo.png"  />  
        <div className="footer-content">
            <div className="footer-list">
                <ul className="footer-menu">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Healing Center</li>
                <li>Healing Stories</li>
                <li>News & Media</li>
                <li>Programs</li>
                <li>Online Programs</li>
                </ul>
            </div>

            <div className="iframe-container">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.943910241729!2d77.36187737622133!3d28.54140558821174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5520115c10f%3A0x984f4ff93edcd0aa!2sPanchatattva!5e0!3m2!1sen!2sin!4v1696329660266!5m2!1sen!2sin"
                width="400"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                ></iframe>
            </div>

            <div className="footer-list">
                <ul className="footer-menu">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Copyright Policy</li>
                <li>Disclaimer</li>
                </ul>
            </div>
        </div>
        <div className="contact-info">
            <ul className="contact-list">
                <li>+91 8178546612</li>
                <li>info@panchatattva.in</li>
                <li>Panchatattva, C-175, Sector 100, Noida, Uttar Pradesh – 201303</li>
            </ul>
        </div>


        </div>
    </div>
         <footer className='screenL'>
            Copyright@2023 Panchatattva Naturopathy Clinic. All Right Reserved
        </footer>
    </div>
    
  );
};

export default Footer;
