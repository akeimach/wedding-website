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
    label: 'Ceremony & Reception',
    location: 'The Faculty Club',
    date: 'Friday, August 15',
    time: '4pm - 10pm',
    blurb:
      'Both our ceremony and reception are at the Faculty Club on UC Berkeley campus.',
  },
  {
    label: 'After Party',
    location: 'TBD',
    date: 'Friday, August 15',
    time: '10pm - 2am',
    blurb:
      "Don't wanna stop dancing? We are planning an after party! We'll update here when we iron out the details.",
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
    <div>
      {location}
      <div style={detailsFont}>
        {date}
        <br />
        {time}
      </div>
      {blurb}
    </div>
  </div>
);

const Details = (): ReactElement => (
  <div id="Details" style={detailsStyle}>
    <h3>Details</h3>
    <div style={flexRowStyle}>
      {detailsInfoArray.map((info: DetailsInfo) => (
        <DetailItem {...info} key={info.label} />
      ))}
    </div>
  </div>
);

export default Details;
