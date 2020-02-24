import React, { ReactElement } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationOn } from 'react-icons/md';
import { mapStyle } from '../constants/style';

interface MarkerInfo {
  label: string;
  lat: number;
  lng: number;
}

const mapInfoArray: MarkerInfo[] = [
  {
    label: 'Faculty Club',
    lat: 37.871789,
    lng: -122.255838,
  },
  {
    label: 'Bancroft Hotel',
    lat: 37.869124,
    lng: -122.255098,
  },
  {
    label: 'Berkeley City Club',
    lat: 37.86751,
    lng: -122.262759,
  },
  {
    label: 'Roberts Redwood Regional Park',
    lat: 37.81219,
    lng: -122.175133,
  },
];

const MapMarker = ({ label }: MarkerInfo) => (
  <div>
    <MdLocationOn size="2rem" />
    {label}
  </div>
);

const Map = (): ReactElement => {
  return (
    <div style={mapStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDpmAfWZqAxQmRncgOYD-QhsTPXCCoq4PE' }}
        defaultCenter={{
          lat: 37.836576,
          lng: -122.227777,
        }}
        defaultZoom={12.5}
      >
        {mapInfoArray.map((info: MarkerInfo) => (
          <MapMarker {...info} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
