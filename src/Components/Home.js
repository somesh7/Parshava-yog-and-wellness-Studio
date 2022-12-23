import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img1 from "../images/MadhaviImg.jpg"
import img2 from "../images/MadhaviImg1.jpg"
import img3 from "../images/MadhaviImg3.jpg"
import img4 from "../images/Parshav_contact.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';



const Home = () => {
  const navigate = useNavigate()
  const navToMain = () => {
navigate('/healing')
  }
  const navToFeng = () => {
      navigate('/feng')
  }
  const navToOffer = () => {
      navigate('/offer')
  }
  const navToCor = () => {
navigate('/corporate')
  }
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
  {/* <AliceCarousel autoPlay infinite autoPlayInterval="1500" autoPlayStrategy='none' disableDotsControls={true} disableButtonsControls={true}>
      <img src={img1} className="aliceimghome" alt='wellness1'/>
      <img src={img3} className="aliceimghome" alt="wellness1"/>
      <img src={img4} className="aliceimghome" alt="wellness1"/>
      <img src={img2} className="aliceimghome" alt="wellness1"/>
     
</AliceCarousel> */}
<Carousel autoPlay interval={1500} autoFocus infiniteLoop showArrows={true} showIndicators={false} showThumbs={false} swipeable={true} showStatus={false}>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
  </div>
  <div className="service_cards">
       
       <div className='cards'>
<div className="card_Serv">
<img className='servHeal' src={process.env.PUBLIC_URL + "/Images/GYog.png"} alt="Group yoga" onClick={navToOffer} />
<h4 className='ser_text_All'> Group Yoga</h4>
<button className='serv_btn_all' onClick={navToOffer}>View</button>
</div>
<div className="card_Serv">
<img className='servHeal' src={process.env.PUBLIC_URL + "/Images/corporate_serv.jpg"} alt="Corporate yoga" onClick={navToCor} />
<h4 className='ser_text_All'> Corporate Yoga</h4>
<button className='serv_btn_all' onClick={navToCor}>View</button>
</div>
<div className="card_Serv">
<img className='servHeal' src={process.env.PUBLIC_URL + "/Images/HomeImg002.jpg"} alt="Sound_healing"  onClick={navToMain} />
<h4 className='ser_text_All'> Sound Healing</h4>
<button className='serv_btn_all' onClick={navToMain}>View</button>
</div>
<div className="card_Serv">
<img className='servHeal' src={process.env.PUBLIC_URL + "/Images/Feng-Shui1.jpg"} alt="Feng Shui" onClick={navToFeng} />
<h4 className='ser_text_All'> Feng Shui</h4>
<button className='serv_btn_all' onClick={navToFeng}>View</button>
</div>

       </div>
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
<Footer />
    </div>
    </> )
}

export default Home