import React, { ReactElement } from 'react';
import {
  accommodationsStyle,
  hotelBoxStyle,
  accommodationsSubFont,
} from '../constants/style';

interface LocationInfo {
  label: string;
  blurb: string;
  price: string;
  contact: string;
}

const locationInfoArray: LocationInfo[] = [
  {
    label: 'Berkeley City Club',
    blurb:
      'Designed by Julia Morgan, this unique historical landmark is walking distance from our wedding venue!',
    price: '$219 per night',
    contact: '(510) 848-7800',
  },
  {
    label: 'Bancroft Hotel',
    blurb:
      'Situated across the street from campus, the Bancroft Hotel offers a cute stay in the heart of campus.',
    price: '$149 per night',
    contact: '(510) 549-1000',
  },
];

const LocationBox = ({
  label,
  blurb,
  price,
  contact,
}: LocationInfo): ReactElement => (
  <div style={hotelBoxStyle}>
    <h4>{label}</h4>
    <p>{blurb}</p>
    <div style={accommodationsSubFont}>Block rate: {price}</div>
    <a href={`tel:${contact}`} style={accommodationsSubFont}>
      {contact}
    </a>
  </div>
);

const Accommodations = (): ReactElement => (
  <div id="Accommodations" style={accommodationsStyle}>
    {locationInfoArray.map((info: LocationInfo) => (
      <LocationBox {...info} key={info.label} />
    ))}
  </div>
);

export default Accommodations;
