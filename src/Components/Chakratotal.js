import React from 'react'
import SvgWhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';
import Footer from './Footer';
const Chakratotal = () => {
    const bookConsultation = () => {

    }
  return (
    <div className='chakratotal'>
    <h3 className='chakra_more'> Know your Chakras</h3>
    <h3 className='chakra_more1'> Body healing centers</h3>
    <img className='image_chakra' src={process.env.PUBLIC_URL + "/Images/Chakra1.jpg"} alt="Chakras" />
    <div className='seven_chakra'>
    
    <div className='Chakras_def'>
    <span className='firstChakra'>
    <img className='muldhara' src={process.env.PUBLIC_URL + "/Images/muldhara.jpg"} alt="Chakras" />
    <h3 className='root_text'> Root Chakra</h3>
    </span>
    
    <span className='first_def'>
      <h3 className='root_text'> Stability , Security, Grounding</h3>
      <p className='root'> You will feel supported, a sense of connection and safety to the physical world, and grounded, if this chakra is working optimally.</p> 
    </span>
    
    </div>
    <div className='Chakras_def'>
    <span className='firstChakra'>
    <img className='muldhara' src={process.env.PUBLIC_URL + "/Images/orange-chakra.jpg"} alt="Chakras" />
    <h3 className='root_text'> Sacral Chakra</h3>
    </span>
    
    <span className='first_def'>
      <h3 className='sacral_text'> Wave Of Creativity, Pleasure , Spontaneous & Zest Of Life, Feel Joy</h3>
      <p className='root'> You will feel committed, passionate, pleasurable, creative, abundant and able to enjoy sex in your life, if this chakra is optimally balanced.</p> 
    </span>
    
    </div>
    <div className='Chakras_def'>
    <span className='firstChakra'>
    <img className='muldhara' src={process.env.PUBLIC_URL + "/Images/mani.jpg"} alt="Chakras" />
    <h3 className='root_text'> Solar Plexus</h3>
    </span>
    
    <span className='first_def'>
      <h3 className='sacral_text'> Will Power, Self-Control, Performer, Self Acceptance</h3>
      <p className='root'>You will feel optimistic, self-compassionate, assertive, calm and confident, if this chakra is optimally balanced.</p> 
    </span>
    
    </div>
    <div className='Chakras_def'>
    <span className='firstChakra'>
    <img className='muldhara' src={process.env.PUBLIC_URL + "/Images/ana1.jpg"} alt="Chakras" />
    <h3 className='root_text'> Heart Chakra</h3>
    </span>
    
    <span className='first_def'>
      <h3 className='sacral_text'> Love & Relationship, Emotional Balance, Acceptance</h3>
      <p className='root'> You will feel joy, compassion, love, gratitude, and peaceful if this chakra is optimally balanced.</p> 
    </span>
    
    </div>
    <div className='Chakras_def'>
    <span className='firstChakra'>
    <img className='muldhara' src={process.env.PUBLIC_URL + "/Images/throat.jpg"} alt="Chakras" />
    <h3 className='root_text'> Throat Chakra</h3>
    </span>
    
    <span className='first_def'>
      <h3 className='root_text'> Communication , Openness, Self Esteem</h3>
      <p className='root'>You will feel truthful and honest yet firm, free to articulate your thoughts, feelings and ideas, if this chakra is optimally balanced.</p> 
    </span>
    
    </div>
    <div className='Chakras_def'>
    <span className='firstChakra'>
    <img className='muldhara' src={process.env.PUBLIC_URL + "/Images/thirdeye.jpg"} alt="Chakras" />
    <h3 className='root_text'> Third Eye</h3>
    </span>
    
    <span className='first_def'>
      <h3 className='sacral_text'>Clarity In Thoughts, Intuition & Wisdom, Vision</h3>
      <p className='root'> When this chakra is balanced we feel clear, focused, and can determine between truth and illusion. We are open to receiving wisdom and insight.</p> 
    </span>
    
    </div>
    <div className='Chakras_def'>
    <span className='firstChakra'>
    <img className='muldhara' src={process.env.PUBLIC_URL + "/Images/crown.jpg"} alt="Chakras" />
    <h3 className='root_text'> Crown Chakra</h3>
    </span>
    
    <span className='first_def'>
      <h3 className='sacral_text'> Conscious Living, Awareness, Oneness, Ability To See Larger Picture</h3>
      <p className='root'>When this chakra is balanced, we live in the present moment. We have an unshakeable trust in our inner guidance.</p> 
    </span>
    
    </div>
    </div>
    <Footer />
        {/* <card className="card">
<img className='image_book' src={process.env.PUBLIC_URL + "/Images/Book.jpg"} alt="Chakras" />
<div className='card_content'>
<h4 className='text_card_content'> Sound therapy for chakra balancing</h4>
<p className='para_content'> Singing Bowls are excellent tools for restructuring the energy field of the body and improving the processing of energy by the chakras.</p>
<button className="consult_btn" onClick={bookConsultation}> <abbr title='Contact us on Whatsapp'> 
    <ReactWhatsapp className='whatsapp_logo_chakra' number="9740676839" message="Hello World!!!"> <SvgWhatsAppIcon color='success' sx={{ fontSize: 30}}> </SvgWhatsAppIcon> </ReactWhatsapp>
    </abbr>
 Book a Consultation</button>
</div>
</card> */}
    </div>
  )
}

export default Chakratotal