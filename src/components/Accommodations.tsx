import React, { ReactElement } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationOn } from 'react-icons/md';
import { blockStyle } from '../';

const MapMarker = ({ label, lat, lng }: { label: string, lat: number, lng: number }) => <div><MdLocationOn />{label}</div>;

const mapCenter = {
  lat: 37.869051,
  lng: -122.258887,
};

const facultyClub = {
  lat: 37.871789,
  lng: -122.255838,
};

const bancroftHotel = {
  lat: 37.869124,
  lng: -122.255098,
};

const berkeleyCityClub = {
  lat: 37.867510,
  lng: -122.262759,
};

const Accommodations = (): ReactElement => {
  return (
    <div id="Accommodations" style={{
      ...blockStyle,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <img src="../images/eucalyptus-frame-90.png" alt="" />
      <div style={{ position: 'relative', bottom: '300px' }}>Accommodations</div>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '***' }}
          defaultCenter={mapCenter}
          defaultZoom={17}
        >
          <MapMarker
            lat={facultyClub.lat}
            lng={facultyClub.lng}
            label="Faculty Club"
          />
          <MapMarker
            lat={bancroftHotel.lat}
            lng={bancroftHotel.lng}
            label="Bancroft Hotel"
          />
          <MapMarker
            lat={berkeleyCityClub.lat}
            lng={berkeleyCityClub.lng}
            label="Berkeley City Club"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Accommodations;
