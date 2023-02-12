import React from 'react'
import SvgCheckSharpIcon from '@mui/icons-material/CheckSharp';
import SvgWhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';
const Chakra = () => {
 
  return (
    <>
        <div className='chakra_div'>
<h4 className='chakra_actb'> Activate & Balance Your Chakras</h4>
<h3 className='Phy_health'> For Greater Physical, Emotional, Mental And Spiritual Health</h3>
<span className='care'>
<div className='left3'>
<p className='para_chakra'>There are seven main chakras situated along the spine, from the base of your spine to the crown of your head. This age-old belief has become integrated into many New Age styles of thought. Chakras are thought to provide subtle energy that helps your organs, mind, and intellect work at their best level</p>
<p className='para_chakra'>7 chakras are the 7 wheels of energy in our body. Blocked energy in any of the 7 chakras may lead to illness. That is why, it is essential to understand what every chakra represents and how to keep energy flowing freely?</p>
</div>
<div className='right3'>
<img className="chakra_right" src={process.env.PUBLIC_URL + "/Images/parshavaYoga12.jpeg"} alt="yoga" />
</div>
</span>
<h3> 7 Chakras 7 Benefits</h3>
<div className="chakra_ben">
    <h4 className='benefits_chakra'>Chakra healing is an excellent way to balance your chakras and find balance within your body and mind.</h4>
<h4 className="benefits_chakra1"> <SvgCheckSharpIcon sx={{ color: 'green', size: 15}} /> Improved overall health and well being </h4>
<h4 className="benefits_chakra1"> <SvgCheckSharpIcon sx={{ color: 'green', size: 15}} /> Greater and faster ability to heal your mental, physical, spiritual and emotional issues. </h4>
<h4 className='benefits_chakra1'> <SvgCheckSharpIcon sx={{ color: 'green', size: 15}} /> Increased openness, memory, concentration and awareness.</h4>
<h4 className='benefits_chakra1'> <SvgCheckSharpIcon sx={{ color: 'green', size: 15}} /> Positive outlook in terms of understanding, perception of behaviors and thought process.</h4>
<h4 className='benefits_chakra1'> <SvgCheckSharpIcon sx={{ color: 'green', size: 15}} /> Heightened creativity and better resourcefulness because of better perception.</h4>
<h4 className='benefits_chakra1'> <SvgCheckSharpIcon sx={{ color: 'green', size: 15}} /> Sense of self-worth, self-esteem and self- confidence.</h4>
<h4 className='benefits_chakra1'> <SvgCheckSharpIcon sx={{ color: 'green', size: 15}} />  Improved and deeper sleep, better control over your emotions and improved patience.</h4>
<h4 className="benefits_chakra1">From above benefits it is clear that clear and healthy functioning chakras certainly propel you into the life you deserve to live.</h4>
<h4 className='benefits_chakra'> Tap into the healing potential of your chakra energetic system.</h4>
</div>
  <div className="bookingsess">
   <h2 className="bpshcbs"> Book personal Sound Healing and Chakra Balancing session</h2>
   
    <ReactWhatsapp className='whatsapp_logo3' number="9021368710" message=" Hello, Book a consultation today !!!">  <button className="logoplustext"> Book Consultation on whatsapp</button> </ReactWhatsapp>
   
  </div>
        </div>
    </>
  )
}

export default Chakra
