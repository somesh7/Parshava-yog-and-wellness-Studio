import React from 'react'
import SvgWhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';
import SvgLinkedInIcon from '@mui/icons-material/LinkedIn';
import SvgInstagramIcon from '@mui/icons-material/Instagram';
import SvgPersonIcon from '@mui/icons-material/Person';
import SvgPhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SvgEmailIcon from '@mui/icons-material/Email';
import SvgPlaceIcon from '@mui/icons-material/Place';
import SvgFacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
         <div className='footer_cont'>
      <div className='nav_cont'>
      <Link className="cont_nav_name" to="/">Home</Link>
        <Link className="cont_nav_name" to="/feng">Fengshui</Link>
        <Link className="cont_nav_name" to="/healing">Sound Healing</Link>
        <Link className="cont_nav_name" to="/corporate">Corporate Yoga</Link>
        <Link className="cont_nav_name" to="/chakra">Chakra Balancing</Link>        
       
      </div>
   <div className='copy_logo'>
   <abbr title='Contact us on Whatsapp'> 
    <ReactWhatsapp className='whatsapp_logo' number="9021368710" message="Hello World!!!"> <SvgWhatsAppIcon sx={{ fontSize: 30, color: "#fff"}}> </SvgWhatsAppIcon> </ReactWhatsapp>
    </abbr>
    <abbr title="connect on LinkedIN">
    <SvgLinkedInIcon sx={{ fontSize: 30, color: "#fff"}} />
    </abbr>
    <abbr title="connect on Instagram">
    <SvgInstagramIcon sx={{ fontSize: 30, color: "#fff"}} className="insta" />
    </abbr>
    <abbr title="connect on Facebook">
      <SvgFacebookIcon color='secondary' sx={{ fontSize: 30, color: "#fff"}} className="insta" />
    </abbr>
    <h5 className='copyright'> Copyright &#169; 2022 Parshava Wellness. All Rights Reserved
   </h5>
   </div>
  
    
    </div> 
    </>
  )
}

export default Footer