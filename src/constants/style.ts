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
  alignItems: 'flex-top',
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
  minWidth: '20%',
  textDecoration: 'none',
};

export const homeStyle: CSSProperties = {
  ...flexRowStyle,
  backgroundAttachment: 'fixed',
  backgroundImage: 'url("../images/eucalyptus-upper.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  filter: `drop-shadow(${boxShadow})`,
  minHeight: '100vh',
};

export const notchBoxStyle: CSSProperties = {
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
  fontSize: fontSizeHome,
  maxWidth: '600px',
  padding: '3rem',
};

export const popoverLinkStyle: CSSProperties = {
  ...fontStyle,
  border: 'none',
  cursor: 'pointer',
  fontSize: fontSizeHome,
  outline: 'none',
  padding: 0,
  textDecoration: 'underline',
};

export const popoverContainerStyle: CSSProperties = {
  background: translucentDarkGreen,
  boxShadow,
  padding: '30px',
};

export const calendarLinksStyle: CSSProperties = {
  listStyle: 'none',
  paddingInlineStart: 0,
};

export const detailsStyle: CSSProperties = {
  background: darkGreen,
  color: white,
  padding: '100px 0',
};

export const detailBoxStyle: CSSProperties = {
  margin: '10px',
  maxWidth: '300px',
  padding: '30px',
};

export const mapStyle: CSSProperties = {
  height: '50vh',
  width: '100%',
};

export const accomodationsStyle: CSSProperties = {
  ...flexRowStyle,
  alignItems: 'stretch',
  backgroundImage: 'url("../images/branch-frame.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: '100px 0',
};

export const hotelBoxStyle: CSSProperties = {
  ...detailBoxStyle,
  background: white,
  boxShadow,
};

export const detailsFont: CSSProperties = {
  fontSize: '16px',
  opacity: 0.6,
  padding: '5px',
};
