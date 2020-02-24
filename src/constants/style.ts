import { CSSProperties } from 'react';

const white = '#fff';
const darkGreen = '#054b30';
const translucentDarkGreen = 'rgba(5, 50, 33, .7)';
const font = 'sans-serif';
const fontSizeBody = '20px';
const fontSizeHome = '25px';
const notchSize = '50px';
const calcNotchSize = `calc(100% - ${notchSize})`;
const boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';

export const flexRowStyle: CSSProperties = {
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  width: '100%',
};

export const fontStyle: CSSProperties = {
  color: darkGreen,
  fontFamily: font,
  fontSize: fontSizeBody,
  fontWeight: 200,
  textAlign: 'center',
};

export const linkStyle: CSSProperties = {
  ...fontStyle,
  color: white,
};

export const navStyle: CSSProperties = {
  ...flexRowStyle,
  background: translucentDarkGreen,
  minHeight: '5vh',
  position: 'fixed',
  zIndex: 100,
};

export const navLinkStyle: CSSProperties = {
  ...linkStyle,
  textDecoration: 'none',
  minWidth: '20%',
};

export const homeStyle: CSSProperties = {
  ...flexRowStyle,
  backgroundAttachment: 'fixed',
  backgroundImage: 'url("../images/eucalyptus-upper.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  filter: `drop-shadow(${boxShadow})`,
};

export const notchBoxStyle: CSSProperties = {
  fontSize: fontSizeHome,
  background: white,
  clipPath: `polygon(
    0% ${notchSize},
    ${notchSize} ${notchSize},
    ${notchSize} 0%,
    ${calcNotchSize} 0%,
    ${calcNotchSize} ${notchSize},
    100% ${notchSize},
    100% ${calcNotchSize},
    ${calcNotchSize} ${calcNotchSize},
    ${calcNotchSize} 100%,
    ${notchSize} 100%,
    ${notchSize} ${calcNotchSize},
    0% ${calcNotchSize})`,
  maxWidth: '600px',
  padding: '3rem',
};

export const popoverLinkStyle: CSSProperties = {
  ...fontStyle,
  border: 'none',
  cursor: 'pointer',
  fontSize: fontSizeHome,
  padding: 0,
  textDecoration: 'underline',
  outline: 'none',
};

export const popoverContainerStyle: CSSProperties = {
  background: translucentDarkGreen,
  padding: '30px',
  boxShadow,
};

export const calendarLinksStyle: CSSProperties = {
  listStyle: 'none',
  paddingInlineStart: 0,
};

export const detailsStyle: CSSProperties = {
  background: darkGreen,
  color: white,
  height: '140px',
  padding: '100px 0',
};

export const mapStyle: CSSProperties = {
  height: '50vh',
  width: '100%',
};

export const accomodationsStyle: CSSProperties = {
  ...flexRowStyle,
  alignItems: 'stretch',
  padding: '100px 0',
  backgroundImage: 'url("../images/branch-frame.png")',
  backgroundRepeat: 'no-repeat',
};

export const hotelBoxStyle: CSSProperties = {
  maxWidth: '200px',
  background: white,
  padding: '30px',
  margin: '10px',
  boxShadow,
};
