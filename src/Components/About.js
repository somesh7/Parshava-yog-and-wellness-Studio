import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import img1 from "../images/MadhaviImg.jpg"
import img2 from "../images/Grp_yoga1.jpg"
import img3 from "../images/Parshav_contact.jpg"
import group1 from "../images/homeimg001.jpg"
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const About = () => {
    return (
        <div className='about'>
  <h2 className='servstyle'> About Us</h2>
            <div className='about_us'>
            <p>
                    <span className="brand"><b>Parshava</b> </span> came into existence in Sep 2022 in Kharadi, Pune, to help people foster their inner health, disease free life and sense of mindfulness. Our Yoga and Healing technique scientifically designed programs help people relieve their physical and mental sufferings and improve their overall wellbeing.
                </p>
              <div className='about_parshava'>
              <div className='paragraph_About'>
             <p>Our yoga classes are for all age groups and generally follow the Iyenger style Yoga, Hatha Yoga, Vinyasa Flow and Power Yoga forms. Whether you are new to yoga or an experienced student, we look forward to welcoming you soon.</p>
                <p>
                    <b>Ms. Madhavi Jain </b>is the founder of <b>Parshava Yog and Wellness Studio Kharadi Pune</b>, She was working as a Human Resource in IT MNC Hinjewadi Pune, turned full time Yoga instructor. She has transformed her life over the last few years. she spent almost a decade of Yoga practice in a traditional way, and thereafter contemplates the teachings to help people from all walks of life, she is certified Hatha Yoga and Iyenger style Yoga Instructor and She is also certified Sound Healer from Himalayan Academy, Rishikesh and Pranic Healer.
                </p>
                <p>
                She is on an endeavor to bring holistic wellness in people's life at a physical, mental and spiritual level. The whole approach is to help people take a Parshava the timeless scientific and spiritual tools to bring back harmony and balance in life. Parshava Yog classes are designed to meet your health objective. Individual attention and hand-holding is ensured to maximize results.
                </p>
              </div>
              <div className='pimg'>
              <Carousel className='new_carosel' autoPlay interval={1500} autoFocus infiniteLoop showArrows={true} showIndicators={false} showThumbs={false} swipeable={true} showStatus={false}>
                <div>
                    <img className='auto_about_img' src={group1} alt="about" />
                    
                </div>
                <div>
                    <img className='auto_about_img' src={img2} alt="about" />
                </div>
                <div>
                    <img className='auto_about_img' src={img3} alt="about" />
                </div>
            </Carousel>
              </div>
              
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
                <div className='yoga'>
           <h2 className='yoga_way'> Yoga Your Way of Life</h2>
           <h2 className='yoga_way'> Yoga practice gives you great Health and Well-being</h2>
           <img className="benyog" src={process.env.PUBLIC_URL + "/Images/benyog1.jpg"} alt="yoga" />
            </div>
            <Footer />
           
            </div>
           
           
        </div>
    )
}

export default About