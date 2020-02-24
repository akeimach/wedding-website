import React, { ReactElement } from 'react';
import {
  detailsStyle,
  flexRowStyle,
  detailBoxStyle,
  detailsFont,
} from '../constants/style';

interface DetailsInfo {
  label: string;
  location: string;
  date: string;
  time: string;
  blurb: string;
}

const detailsInfoArray: DetailsInfo[] = [
  {
    label: 'Welcome Dinner',
    location: 'Roberts Park',
    date: 'Friday, August 14',
    time: '3pm - 8pm',
    blurb:
      'Join us for a low key dinner in our favorite Bay Area park. Food, drinks, and games will be provided.',
  },
  {
    label: 'Wedding Ceremony and Reception',
    location: 'The Faculty Club',
    date: 'Friday, August 15',
    time: '4pm - 10pm',
    blurb:
      'Both our ceremony and reception are at the Faculty Club on UC Berkeley campus.',
  },
];

const DetailItem = ({
  label,
  location,
  date,
  time,
  blurb,
}: DetailsInfo): ReactElement => (
  <div style={detailBoxStyle}>
    <h4>{label}</h4>
    <p>
      {location}
      <div style={detailsFont}>
        {date}
        <br />
        {time}
      </div>
      {blurb}
    </p>
  </div>
);

const Details = (): ReactElement => (
  <div id="Details" style={detailsStyle}>
    <h3>Details</h3>
    <div style={flexRowStyle}>
      {detailsInfoArray.map((info: DetailsInfo) => (
        <DetailItem {...info} />
      ))}
    </div>
  </div>
);

export default Details;
