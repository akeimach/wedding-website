import React, { ReactElement } from 'react';
import { MdSchedule, MdMyLocation } from 'react-icons/md';
import { detailsStyle, flexRowStyle } from '../constants/style';

const Details = (): ReactElement => (
  <div id="Details" style={detailsStyle}>
    <h3>Details</h3>
    <div style={flexRowStyle}>
      <div>
        <MdSchedule />
        <div>When</div>
        <div>August 15, 2020</div>
      </div>
      <div>
        <MdMyLocation />
        <div>Where</div>
        <div>The Faculty Club</div>
      </div>
    </div>
  </div>
);

export default Details;
