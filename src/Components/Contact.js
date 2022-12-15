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

const location = {
  address: 'Shop No - 5, Blue Berry Rd, opposite Deccan Gold Society, Tulaja Bhawani Nagar, Kharadi, Pune, Maharashtra 411014',
  lat: 18.562769,
  lng: 73.950034,
}
const Contact = () => {

 return (<>
  <div className='contact_head'>
  <img className='contact_img' src={process.env.PUBLIC_URL + "/Images/contact_us1.jpg"} alt="contact" />
      <card className='contact_card'>
      <div className='owner_num'>
      <SvgPersonIcon className='contact_icons' sx={{ fontSize: 40, color: "#fff"}}   />
      <h6 className='ow_name'> Madhavi Jain</h6> 
      <SvgPhoneIphoneIcon className='contact_icons1' sx={{ fontSize: 30, color: "#fff"}}   />
     <h6 className='ow_name'>  9021368710</h6>
     <SvgEmailIcon className='contact_icons2' sx={{ fontSize: 30, color: "#fff"}} />
     <h6 className='ow_name'>    madhavi@parshavawellness.com</h6>
     <h6 className='ow_name'> <SvgPlaceIcon  />  Shop No - 5, Blue Berry Rd, opposite Deccan Gold Society, Tulaja Bhawani Nagar, Kharadi, Pune, Maharashtra 411014</h6>
     <div className="profession">
<h6 className='ow_num'> Certified Yoga Instructor,Sound Healer and Pranic Healer</h6>
     </div>
    </div>
      </card>
      {/* <Map location={location} zoomLevel={17} /> */}
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
    <ReactWhatsapp className='whatsapp_logo' number="9021368710" message="Hello World!!!"> <SvgWhatsAppIcon color='success' sx={{ fontSize: 30}}> </SvgWhatsAppIcon> </ReactWhatsapp>
    </abbr>
    <abbr title="connect on LinkedIN">
    <SvgLinkedInIcon sx={{ fontSize: 30, color: "#0077b5"}} />
    </abbr>
    <abbr title="connect on Instagram">
    <SvgInstagramIcon sx={{ fontSize: 30, color: "#fec564"}} className="insta" />
    </abbr>
    <abbr title="connect on Facebook">
      <SvgFacebookIcon color='secondary' sx={{ fontSize: 30, color: "#0077b5"}} className="insta" />
    </abbr>
    <h5 className='copyright'> Copyright &#169; 2022 Parshava Wellness. All Rights Reserved
   </h5>
   </div>
  
    
    </div> 
  </div>
  
 </>
  
  )
}

export default Contact