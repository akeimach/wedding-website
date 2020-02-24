import React, { ReactElement } from 'react';
import CalendarLinks from './CalendarLinks';
import { homeStyle, notchBoxStyle } from '../constants/style';

const Home = (): ReactElement => {
  return (
    <div id="Home" style={homeStyle}>
      <div style={notchBoxStyle}>
        <h3>Alyssa and Danny's Wedding</h3>
        <p>Come celebrate with us!</p>
        <p>
          <CalendarLinks />
          <br />
          Berkeley, CA
        </p>
      </div>
    </div>
  );
}

export default Home;
