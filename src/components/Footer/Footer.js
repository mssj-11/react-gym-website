import React from 'react';
import '../../styles/footer.css';
import logo from '../../assets/img/dumble.png';


const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className='footer' data-aos='fade-up' data-aos-duration='1500'>
        <div className='container'>
            <div className='footer_wrapper'>
                <div className='footer_box'>

                    {/* LOGO */}
                    <div className='logo'>
                        <div className='logo_img'>
                            <img src={logo} alt='' />
                        </div>
                        <h2>Fussion<span className='highlights'> Fit</span></h2>
                    </div>
                    <p>
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                    </p>
                </div>

                {/* FOOTER */}
                <div className='footer_box'>
                    <h4 className='footer_title'>Company</h4>
                    <ul className='footer_links'>
                        <li><a href='#' >Our Program</a></li>
                        <li><a href='#' >Our Plan</a></li>
                        <li><a href='#' >Become a member</a></li>
                    </ul>
                </div>

                <div className='footer_box'>
                    <h4 className='footer_title'>Quick Links</h4>
                    <ul className='footer_links'>
                        <li><a href='#' >About Us</a></li>
                        <li><a href='#' >Contact us</a></li>
                        <li><a href='#' >Support</a></li>
                    </ul>
                </div>

                <div className='footer_box'>
                    <h4 className='footer_title'>Quick Links</h4>
                    <ul className='footer_links'>
                        <li><a href='#' >About Us</a></li>
                        <li><a href='#' >Contact us</a></li>
                        <li><a href='#' >Support</a></li>
                    </ul>
                </div>
                
            </div>

            <p className='copyright'>
                Copyright &copy; {year} developed by <a href='#' className='highlights'> MSS</a>. All rights reserved.
            </p>
        </div>
    </footer>
  );
}

export default Footer