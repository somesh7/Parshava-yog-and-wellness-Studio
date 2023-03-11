import React from 'react'

const Kids = () => {
  return (
    <>
 <div className='kids'>
 <h2 className="kid_heading"> Yoga for Kids and Teens</h2>
<p>Yoga can help children deal with this pressure-cooker environment. And infuse energy and confidence into their personalities.</p>
<p>Yoga develops awareness of body, mind and breath.
Helps arrest a child’s wandering mind. Builds attention span and concentration power.
</p>
<div className='kiddo'>
<img className='kiddoimg' src={process.env.PUBLIC_URL + "/Images/Kidsyoga.jpeg"} alt="Yoga for kids" />
<h2 className="kid_heading"> Benefits of Kids yoga</h2>
<ul className='kiddo_ben'>
    <li> Full body workout and Flexibility</li>
    <li> Improve Body Posture and increase Height</li>
    <li> Develop confidence and sense of achievement</li>
    <li>Keep the heart, respiratory and digestive system fit</li>
    <li>Increases Stamina,Immunity and concentration</li>
    <li>Improves emotional regulation</li>
    <li> Positive thinking</li>
</ul>
</div>

 </div>
    </>
  )
}

export default Kids