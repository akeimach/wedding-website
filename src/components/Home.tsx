import React, { ReactElement, CSSProperties } from 'react';

const homeStyle: CSSProperties = {
  backgroundImage: 'url("../images/eucalyptus-upper.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const textStyle: CSSProperties = {
  textAlign: 'center',
  fontSize: '25px',
  padding: '40px',
};

const notchSize = '50px';
const clipPath = `
polygon(
  0% ${notchSize},
  ${notchSize} ${notchSize},
  ${notchSize} 0%,
  calc(100% - ${notchSize}) 0%,
  calc(100% - ${notchSize}) ${notchSize},
  100% ${notchSize},
  100% calc(100% - ${notchSize}),
  calc(100% - ${notchSize}) calc(100% - ${notchSize}),
  calc(100% - ${notchSize}) 100%,
  ${notchSize} 100%,
  ${notchSize} calc(100% - ${notchSize}),
  0% calc(100% - ${notchSize})
)`;

const Home = (): ReactElement => {
  return (
    <div id="Home" style={homeStyle}>
      <div style={{
        ...textStyle,
        maxWidth: '600px',
        padding: '3rem',
        background: '#fff',
        clipPath,
      }}>
        <h3>Alyssa and Danny's Wedding</h3>
        <p>Come celebrate with us!</p>
        <p>August 15, 2020<br />Berkeley, CA</p>
      </div>
    </div>
  );
}

export default Home;
