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
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import img1 from "../images/MadhaviImg.jpg"
import img2 from "../images/MadhaviImg1.jpg"
import img3 from "../images/MadhaviImg3.jpg"
import group1 from "../images/homeimg001.jpg"




const About = () => {
    return (
        <div className='about'>
  <h2 className='servstyle'> About Us</h2>
            <div className='about_us'>
            <p>
                    <span className="brand"><b>Parshava</b> </span> came into existence in Sep 2022 in Kharadi, Pune, to help people foster their inner growth and sense of mindfulness and peace in the surrounding community. Our spiritual and scientifically designed programs help people relieve their physical and mental pains and improve their overall wellbeing.
                </p>
              <div className='about_parshava'>
              <div className='paragraph_About'>
             
                <p>
                    <b>Ms. Madhavi Jain </b>is the founder of <b>Parshava Yog and Wellness Studio Kharadi Pune</b>, She was an Human Resource in IT MNC Hinjewadi Pune, turned yoga instructor. She has transformed her life over the last few years. she spent almost a decade of Yoga practice in a traditional way, and thereafter contemplates the teachings to help people from all walks of life, she is certified Hatha Yoga and Iyenger style Yoga Instructor and She is also certified Sound Healer from Himalayan Academy, Rishikesh and certified Pranic Healer (one stop for all solution for all issues).
                </p>
                <p>
                She is on an endeavor to bring holistic wellness in people's life at a physical, mental and spiritual level. The whole approach is to help people take a Parshava the timeless scientific and spiritual tools to bring back harmony and balance in life. Parshava Yog classes are designed to meet your health objective. Individual attention and hand-holding is ensured to maximize results.
                </p>
              </div>
              <div className='pimg'>
              <AliceCarousel autoPlay infinite autoPlayInterval="1500" autoPlayStrategy='none' disableDotsControls={true} disableButtonsControls={true}>
      <img src={group1} className="sliderimg" alt='Madhavi Jain'/>
      <img src={img2} className="sliderimg" alt="Madhavi Jain"/>
      <img src={img3} className="sliderimg" alt="Madhavi Jain"/>

</AliceCarousel>
              </div>
              <span>
                  
              </span>
              
              </div>
             
                <span className='holly'>
                What is Holistic Well-being?
                </span>
                <p>
                Holistic well-being includes body, mind, social, and spirit. The human body is interconnected; our physical body depends on our mental state and vice versa. Your social support influences your mental well-being.
                </p>
                <span className='holly'>
                Aspects of Holistic Well-being
                </span>
                <p><b> Physical well-being:</b> The Body is often described as a vessel. Taking care of it is essential to maintain stability, flexibility, and prevention of diseases. </p>
                <p> <b>Mental well-being: </b> This includes being mindful of your thoughts, emotions, and which influences your interactions with yourself and others. This includes being mindful of your thoughts, emotions, and which influences your interactions with yourself and others. </p>
                <p> <b>Social well-being: </b> Social support is a crucial aspect of our well-being. This aspect includes the connection you have with others, the way you interact, connect and form bonds with others</p>
                <p> <b>Spiritual well-being: </b> This encompasses feeling connected to the inner self and/or believing in a higher power. Spiritual well-being may help us find meaning in life and inspire us to move forward. </p>
           
           
            </div>
            <div className='yoga'>
           <h2 className='yoga_way'> Yoga Your Way of Life</h2>
           <h2 className='yoga_way'> Yoga practice gives you great Health and Well-being</h2>
           <img className="benyog" src={process.env.PUBLIC_URL + "/Images/benyog1.jpg"} alt="yoga" />
            </div>
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
    )
}

export default About