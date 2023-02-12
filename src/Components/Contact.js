import React from 'react'
import SvgPersonIcon from '@mui/icons-material/Person';
import SvgPhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SvgEmailIcon from '@mui/icons-material/Email';
import SvgPlaceIcon from '@mui/icons-material/Place';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const location = {
  address: 'Shop No - 5, Blue Berry Rd, opposite Deccan Gold Society, Tulaja Bhawani Nagar, Kharadi, Pune, Maharashtra 411014',
  lat: 18.562769,
  lng: 73.950034,
}
const Contact = () => {

 return (<>
  <div className='contact_head'>
  {/* <img className='contact_img' src={process.env.PUBLIC_URL + "/Images/contact_us1.jpg"} alt="contact" /> */}
      <card className='contact_card'>
      <div className='owner_num'>
      <span className="cont_logo12">
      <SvgPersonIcon className='' sx={{ fontSize: 40, color: "#fff"}}   />
      <h6 className='ow_name'> Madhavi Jain</h6> 
      </span>
     <span className="cont_logo12">
     <SvgPhoneIphoneIcon className='' sx={{ fontSize: 30, color: "#fff"}}   />
     <h6 className='ow_name'>  9021368710</h6>
     </span>
     <span className="cont_logo12">
     <SvgEmailIcon className='' sx={{ fontSize: 30, color: "#fff"}} />
     <h6 className='ow_name'>    madhavi@parshavawellness.com</h6>
     </span>
     <span className="cont_logo12">
     <SvgPlaceIcon sx={{ fontSize: 30, color: "#fff"}} /> 
     <h6 className='ow_name'>Gera Imperium Alpha 10th floor office number 1023 , Kharadi pune, Pune, Maharashtra 411014</h6>
     </span>
     
    </div>
    <div className="profession">
<h6 className='ow_num'> Certified Yoga Instructor,Sound Healer and Pranic Healer</h6>
     </div>
      </card>
      <Footer />
  </div>
  
 </>
  
  )
}

export default Contact