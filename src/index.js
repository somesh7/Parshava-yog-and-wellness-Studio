import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SvgWhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='whatsapp'>
    <abbr title='Contact us on Whatsapp'> 
    <ReactWhatsapp className='whatsapp_logo' number="9021368710" message=" Hello, Book a consultation today !!!"> <SvgWhatsAppIcon color='success' sx={{ fontSize: 70}}> </SvgWhatsAppIcon> </ReactWhatsapp>
    </abbr>


      </div>
  </React.StrictMode>
);
