import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
import PinDropIcon from '@mui/icons-material/PinDrop';

const location = {
    address: 'Shop No - 5, Blue Berry Rd, opposite Deccan Gold Society, Tulaja Bhawani Nagar, Kharadi, Pune, Maharashtra 411014',
    lat: 18.562769,
    lng: 73.950034,
  }
  const Map = ({ location, zoomLevel }) => {
      ( <>
          
      
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
    </>
  )
      }
      const LocationPin = ({ text }) => (
        <div className="pin">
          {/* <Icon icon={PinDropIcon} className="pin-icon" /> */}
          <p className="pin-text">{text}</p>
        </div>
      )


export default Map