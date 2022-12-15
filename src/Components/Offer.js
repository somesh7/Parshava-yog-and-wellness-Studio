import React from 'react'

const Offer = () => {
  return (
    <div className='course'>
    <div className="services">
      <ul className='olt' type="none">  
<li className='olt_text'> Group Yoga Classes (Along with sound healing) -  </li>
      </ul>
       <span className='well'>
       <div className='left'> 
      
      <ul className='ult'>
      <h3> Yoga for Essential Wellness </h3> 
        <li className='ult_text'>General fitness</li>
        <li className='ult_text'>Controlling Stress disorders</li>
        <li className='ult_text'>Weight Management</li>
        <li className='ult_text'>Managing Hormonal Imbalances</li>
        <li className='ult_text'>Improved Immunity</li>
        <li className='ult_text'>Flexibility & Stamina</li>
      </ul>
      </div>
      <div className='right'>
        <img src={process.env.PUBLIC_URL + "/Images/benyog.jpg"} className="ben_grp_yog" alt="yoga" />
      </div> 
      </span>
    </div>
    </div>
  )
}

export default Offer