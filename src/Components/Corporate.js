import React from 'react'
import Footer from './Footer';


const Corporate = () => {
  return (
    <>
        <div className='course2'>
        <ul className='olt' type="none">
      
      <li className='olt_text'>Corporate Wellness Program - </li>
            </ul>
      <span className='well2'>
      <div className='left2'>
      <p> Corporate Yoga classes are a great way to improve workplace morale, increase productivity and bring everyone together to do something fun as a group.</p>
      <p>
      Yoga can be a welcome break to a busy work day or a relaxing way to de-stress at the end of the day.
      </p>
      <p>
      We guarantee that each and every yoga class with one of our certified teachers will leave you and your co-workers refreshed, re-energized and ready to deal with workplace stress.
      </p>
      </div>
      <div className='right2'>
      <img className='corporate_right' src={process.env.PUBLIC_URL + "/Images/corporate_yoga_pic.png"} alt="yoga" />
      </div>

      </span>
     
    
      <span className='wellness'>
      <h3> Benefits of Corporate Yoga</h3>
      <div className='split'>
      <div className='splitIn_cols'>
      <ul type="none">
      <li className='ult_head'> For Businesses :</li> 
      </ul>
      <ul>
<li className='ult_text1'>Increased productivity</li>
<li className='ult_text1'> Decreased health care premiums</li>
<li className='ult_text1'>Reduced staff turnover</li>
<li className='ult_text1'>Reduced employee absenteeism</li>
<li className='ult_text1'>Higher job satisfaction amongst employees</li>
<li className='ult_text1'>More respect for senior management of companies</li>
<li className='ult_text1'>More attractive to potential employees seeking employment with your company</li>
      </ul>
      </div>
      <div className='splitIn_cols'>
      <ul type="none"> 
      <li className='ult_head'> For Employees : </li></ul>
      <ul>
        <li className='ult_text1'>Reduced stress, anxiety & depression</li>
        <li className='ult_text1'>Increased energy and decreased fatigue</li>
        <li className='ult_text1'>Improved memory, focus and concentration</li>
        <li className='ult_text1'>Stronger muscles and increased flexibility</li>
        <li className='ult_text1'>Improved posture</li>
        <li className='ult_text1'>Improved overall health and reduced risk for diseases, including cancer</li>
      </ul>
      </div>
      </div>
      </span> 
      <div className='corporate'>
        <h3 className="sessions">You can avail Corporate Yoga sessions in the following formats</h3>
        <h3 className='onetimeyoga'> 1-Time yoga workshops : 40 to 60 mins</h3>
        <h3 className='categ'> Standing and desktop yoga</h3>
        <p>This workshop gives employees an understanding about Yoga and its benefits. This will be an interactive workshop making sure each participant leaves the session with maximum learning. </p>
        <p><b>Computer Ergonomics & Chair yoga</b> (Correcting Postures and yoga poses that can be done while seated in a chair) </p>

<p>It includes various Asanas & Stretchings (specially related to current health issues), Breath work and Meditation with <b>Tibetian Sound Healing</b>. We also talk about daily eating habits (do and dont’s) and will talk about holistic way of living.
</p>
      </div>
     <div className='cor2'>
     <h3 className='onetimeyoga'> 60 minutes - Yoga sessions</h3>
     <p>These are similar to our Studio sessions and are carried out at your company location. Twice or thrice in a week.</p>
     </div>
     <div className='cor3'>
       <h3 className='onetimeyoga'> Rapid Yoga - 20 minutes Desktop Yoga Workshop - One time or multiple time in a month.</h3>
       <p>(Especially for IT and BPO professionals. A quick 15 - 20-minutes session, can be done in office space near the workstations, micro exercises for every part of the body, can be done standing in office clothes) This is a Workshop conducted for smaller groups at their desktops. It covers the asanas that one can practice at their desk before, after or during work.</p>
     </div>
     <div className='cor3'>
<h3 className='onetimeyoga'>Traditional Yoga Monthly/Quarterly/halfyearly Subscriptions </h3>
<p>(Asanas & Pranayam) (long session of around 45 minute, require more time , space and mats): Can be done twice or thrice in a week.</p>
     </div>
     <div className='cor3'> 
     	<h3 className='onetimeyoga'>
       Special corporate meditation Sessions	(30 min-40 min)
       </h3>
       <p>
       A club for guided meditation offers your team a vehicle to improve their sense of overall peace, enhancing their engagement and productivity. Providing space and time to exercise mindful meditation at work shows your staff that you value them as employees and people.
       </p>
       </div>
     <Footer />
        </div>

    </>
  )
}

export default Corporate