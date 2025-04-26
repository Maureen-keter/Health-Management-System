import React from 'react';
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </div>
        <p>&copy; 2025 HealthSys.com </p>
    </div>
  )
}

export default Footer;