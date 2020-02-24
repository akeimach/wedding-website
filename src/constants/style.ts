import { CSSProperties } from 'react';

const white = '#fff';
const darkGreen = '#054b30';
const translucentDarkGreen = 'rgba(5, 50, 33, .7)';
const font = 'sans-serif';
const fontSizeBody = '20px';
const fontSizeHome = '25px';
const notchSize = '50px';
const calcNotchSize = `calc(100% - ${notchSize})`;

const flex: CSSProperties = {
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex',
};

export const flexColumnStyle: CSSProperties = {
  ...flex,
  flexDirection: 'column',
  padding: '100px 0',
};

export const flexRowStyle: CSSProperties = {
  ...flex,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
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
  width: '100%',
  zIndex: 100,
};

export const navLinkStyle: CSSProperties = {
  ...linkStyle,
  textDecoration: 'none',
  width: '20%',
};

export const homeStyle: CSSProperties = {
  ...flex,
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundAttachment: 'fixed',
  backgroundImage: 'url("../images/eucalyptus-upper.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
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
};

export const popoverContainerStyle: CSSProperties = {
  background: translucentDarkGreen,
  borderRadius: '5px',
  padding: '20px',
  border: `20px solid ${translucentDarkGreen}`,
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
