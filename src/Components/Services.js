import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Services = () => {
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
    const navToChakra = () => {
        navigate('/chakratotal')
      }
      const navToPran = () => {
        navigate("/pran")
      }
  return (
 <>
 <div className='serv'>
 <h2 className='servstyle'>
        Offerings
      </h2>
 
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
<div className="card_Serv">
<img className='servHeal' src={process.env.PUBLIC_URL + "/Images/praanic1.jpg"} alt="Feng Shui" onClick={navToPran} />
<h4 className='ser_text_All'> Pranic Healing</h4>
<button className='serv_btn_all' onClick={navToPran}>View</button>
</div>
<div className="card_Serv">
<img className='servHeal' src={process.env.PUBLIC_URL + "/Images/praanic1.jpg"} alt="Feng Shui" onClick={navToFeng} />
<h4 className='ser_text_All'> Chakra Balancing</h4>
<button className='serv_btn_all' onClick={navToChakra}>View</button>
</div>

       </div>
        </div>
        <Footer />
        </div>
 </>
  )
}

export default Services