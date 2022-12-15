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
import img1 from "../images/MadhaviImg.jpg"
import img2 from "../images/MadhaviImg1.jpg"
import img3 from "../images/MadhaviImg3.jpg"
import img4 from "../images/Parshav_contact.jpg"


const Home = () => {
  return (<>
   {/* <div className="new_homealice">
    <SimpleImageSlider
        width={700}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      </div> */}
    <div className='home'>
  <div className='center_carasoul'> 
  <AliceCarousel autoPlay infinite autoPlayInterval="1500" autoPlayStrategy='none' disableDotsControls={true} disableButtonsControls={true}>
      <img src={img1} className="aliceimghome" alt='wellness1'/>
      <img src={img3} className="aliceimghome" alt="wellness1"/>
      <img src={img4} className="aliceimghome" alt="wellness1"/>
      <img src={img2} className="aliceimghome" alt="wellness1"/>
     
</AliceCarousel>
  </div>
    
<div className='after_home'>
<div className='left_after_home'>
<p>
Do you know that Yoga has 60+ health benefits? Yoga is one of the most popular physical activities all over the world. Not only this, Yoga provides spiritual enlightenment to alcoholics and drug addicts.
</p>
<p>
Most of us have done Yoga and have self-experienced soothing and treating effective measures of Yoga. Be it anything illness, issues, diagnoses, or stressful situations, Yoga can simply turn such situations into positivity.
</p>
<h4 className='word1'> Benefits of Yoga According to Science</h4>
<p>
In recent years, <b>modern medicine and research</b> have proven that practicing yoga is good for your mental as well as physical health.
</p>
<p>
In a <b>study conducted by Harvard Health in 2009</b>, it was studied that people who practiced yoga had a high tolerance for pain and were able to regulate their pain and stress responses. In addition, yoga works as a natural stress reliever, reduce blood pressure, and ease respiration.
</p>
</div>
<div className='bene_img_div'>
<img className='bene_img' src={process.env.PUBLIC_URL + "/Images/mentalbenefitsofyoga.png"} alt="Benefits of yoga"/>
</div>
</div>
<div className='pranayama'> 
<h2 className='pranayama_ben'>Pranayama and its benefits</h2>
<div className='duo_pranayama'>
<div className='left_pranayama'> 
     
       <p> Physically, Pranayama appears to be a systematic exercise of respiration, which makes the lungs stronger, improves blood circulation, makes the man healthier and bestows upon him the boon of a long life.</p>
  
      <p>Pranayama does not mean just breathing in, keeping the breathed air in and exhaling it. It also means establishing control on the entire breathing process, and maintaining mental equilibrium, and concentration of mind.</p>
    
      <p>Most of the people do not have the habit of breathing deeply with the result that only one-fourth part of the lungs is brought into action and 75 percent remains idle.</p>
   
      <p>The inefficient functioning of the lungs affects the process of blood purification. It is for this reason that the importance of Pranayama has come to be recognised, for a healthy long life.
</p>
    
      <p> Several diseases can be averted by regular practice of Pranayama. Mental disturbances like excitement, anxiety, fear, anger, and disappointment can be calmed down by regular practice of Pranayama.</p>
   
</div>
<div className='prana_div_img'>
<img className='prana_img' src={process.env.PUBLIC_URL + "/Images/pranayama-benefits.jpg"} alt="Benefits of Pranayama"/>
</div>

</div>
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
    </> )
}

export default Home