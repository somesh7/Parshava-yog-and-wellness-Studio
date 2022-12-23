import React from 'react'
import Chakra from './Chakra'
import Video from './Video'

const Healing = () => {
  return (
    <div className='healing'>
    <img className='shimg' src={process.env.PUBLIC_URL + "/Images/Sound-Healing123.jpg"} alt="Sound_healing" />
<h3 className='ther'> what is sound healing therapy?</h3>
<span className='care'>
<div className='left3'>

<p> Sound healing is the term referring to different meditation and healing techniques using the unique properties of sound vibrations. The specific sound frequencies, when produced with knowledge and awareness, become a powerful tool for physical and emotional healing and spiritual awakening.</p>
   <p>Tibetan bowls are an ultimate source for achieving a state of deep relaxation. An ancient form of technology dating back 2500 years, they stimulate brainwaves to entrain our brain with the tone of the bowl and to experience pleasant and productive emotional and mental states.</p>
   <p> Sound vibrations gently "massage" every cell in your body to improve your physical and emotional wellness.</p>
</div>
<div className='right3'>
<img className='bookheal' src={process.env.PUBLIC_URL + "/Images/Book.jpg"} alt="Sound_healing" />
</div>
</span>
  <div className='working_sound'>
  <h3>So, how does it work? </h3>
   <p>During a sound healing session, <b>also known as a sound bath</b>, you'll typically lie down on the floor or a yoga mat, and simply listen up as a practitioner plays all 7 chakra Sound bowls and you "bathe" in the soothing sounds and vibrations. <b>Roxie Sarhangi</b>, a certified sound healing practitioner based in Los Angeles, describes it as a "meditative acoustic sound concert." The sound frequencies then <b> slow down brain waves to a deeply restorative state</b>, which activates the body's system of self-healing.</p>
  </div>
  <h3 className='fourben'>4 benefits of sound healing</h3>
 <div className='b1'>
 
 <ul type="none"> 
 <li className='benefit_sound1'>
 1. It's super-relaxing
 </li> 
 <p> Deep relaxation is one of the most significant and universal benefits of sound therapy. "The sounds permeate our system returning it back to harmony," Sarhangi says. So if you take nothing else away from a sound healing session, relaxation on its own is worth it. With our busy schedules and so much going on in the world, we can all use some chill vibes.</p>
 </ul>
 </div>
 <div className='b2'>
 <ul type="none"> 
 <li className='benefit_sound1'>
 2. It helps clears energetic blockages
 </li> 
 <p> Some people experience deep healing during sound therapy as the sound vibrations open, clear, and balance their chakras and release stuck energy. Schieffelin describes it as an "energetic deep tissue massage" that leaves you feeling balanced and replenished.</p>
 <p>"When [a healing] happens, you may also feel physical sensations like tingling in your hands or feel or a sense of being hot or cold," Schieffelin says. "Breathe into the sensations without attaching to them or labeling them. Instead, focus on your breath as you allow them to pass."</p>
 </ul>
 </div>
 <div className='b3'>
<ul type="none">
<li className='benefit_sound1'>
3. It boosts your health
</li>
<p> That's right—it's not completely woo-woo. "Research has already demonstrated that sound healing can be incredibly beneficial when working with [a variety of] patients," Schieffelin says.</p>
 <p>Benefits can include <b> improved sleep</b>, reduction of chronic pain and<b>  blood pressure</b>, lowered cholesterol, and <b> a decreased risk of heart disease</b>. (Although, for professional help with these ailments, please see a certified medical practitioner.)</p>
</ul>

 </div>
 <div className='b1'>
<ul type="none">
<li className='benefit_sound1'>
4. It supports mental, emotional, and spiritual well-being
</li>
<p>
It also heals on the mental and emotional levels. "Sound healing helps reduce stress,<b> anxiety, and depression</b>," Schieffelin says. "It balances and clears the mind, and leads to a renewed sense of purpose, well-being, calm, and happiness."
</p>
</ul>
 </div>
 <Video />
 <div className='b4'>
<p> "Sound healing balances and clears the mind, and leads to a renewed sense of purpose, well-being, calm, and happiness." —Susy Markoe Schieffelin, sound healer</p>
 </div>
 <Chakra />
  </div>
  )
}

export default Healing