import React, { ReactElement, CSSProperties } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const navStyle: CSSProperties = {
  position: 'fixed',
  minHeight: '5vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, .3)',
  width: '100%',
};

const navLinkStyle: CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  width: '20%',
  textAlign: 'center',
};

const StyledNavLink = ({ destination }: { destination: string }): ReactElement => (
  <NavLink
    style={navLinkStyle}
    smooth
    to={`#${destination}`}
  >
    {destination}
  </NavLink>
);

const Nav = (): ReactElement => {
  return (
    <div style={navStyle}>
      <StyledNavLink destination="Home" />
      <StyledNavLink destination="Details" />
      <StyledNavLink destination="Accommodations" />
    </div>
  );
}

export default Nav;
