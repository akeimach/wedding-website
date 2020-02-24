import React, { ReactElement } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationOn } from 'react-icons/md';
import { mapStyle } from '../constants/style';

interface MarkerInfo {
  label?: string;
  lat: number;
  lng: number;
};

const MapMarker = (markerInfo: MarkerInfo) => (
  <div>
    <MdLocationOn size="2rem" />
    {markerInfo.label}
  </div>
);

const mapCenter: MarkerInfo = {
  lat: 37.836576,
  lng: -122.227777,
};

const facultyClub: MarkerInfo = {
  label: 'Faculty Club',
  lat: 37.871789,
  lng: -122.255838,
};

const bancroftHotel: MarkerInfo = {
  label: 'Bancroft Hotel',
  lat: 37.869124,
  lng: -122.255098,
};

const berkeleyCityClub: MarkerInfo = {
  label: 'Berkeley City Club',
  lat: 37.867510,
  lng: -122.262759,
};

const robertsPark: MarkerInfo = {
  label: 'Roberts Redwood Regional Park',
  lat: 37.812190,
  lng: -122.175133,
};

const Map = (): ReactElement => {
  return (
    <div style={mapStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDpmAfWZqAxQmRncgOYD-QhsTPXCCoq4PE' }}
        defaultCenter={mapCenter}
        defaultZoom={12.5}
      >
        <MapMarker {...facultyClub} />
        <MapMarker {...bancroftHotel} />
        <MapMarker {...berkeleyCityClub} />
        <MapMarker {...robertsPark} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
