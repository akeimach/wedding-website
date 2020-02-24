import React, { ReactElement } from 'react';
import { accomodationsStyle, hotelBoxStyle } from '../constants/style';

interface LocationInfo {
  label: string;
  blurb: string;
}

const locationInfoArray: LocationInfo[] = [
  {
    label: 'Berkeley City Club',
    blurb:
      "One of Berkeley's oldest hotels and social clubs, this Julia Morgan design is a fun stay",
  },
  {
    label: 'Bancroft Hotel',
    blurb:
      'Situated across the street from campus and a 5 minute walk from the ceremony, the Bancroft Hotel offers a cute stay near the heart of campus',
  },
];

const LocationBox = ({ label, blurb }: LocationInfo): ReactElement => (
  <div style={hotelBoxStyle}>
    <h4>{label}</h4>
    <p>{blurb}</p>
  </div>
);

const Accommodations = (): ReactElement => (
  <div id="Accommodations" style={accomodationsStyle}>
    {locationInfoArray.map((info: LocationInfo) => (
      <LocationBox {...info} />
    ))}
  </div>
);

export default Accommodations;
