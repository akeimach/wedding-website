import React, { ReactElement } from 'react';
import CalendarLinks from './CalendarLinks';
import { homeStyle, notchBoxStyle } from '../constants/style';

const Home = (): ReactElement => (
  <div id="Home" style={homeStyle}>
    <div style={notchBoxStyle}>
      <p>Given the ongoing uncertainty around travel and large gatherings</p>
      <h3>Alyssa and Danny's wedding reception</h3>
      <p>is tentatively rescheduled for next year</p>
      <p>
        <CalendarLinks />
        <br />
        Berkeley, CA
      </p>
    </div>
  </div>
);

export default Home;
