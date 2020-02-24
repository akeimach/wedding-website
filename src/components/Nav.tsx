import React, { ReactElement } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { navStyle, navLinkStyle } from '../constants/style';

const StyledNavLink = ({
  destination,
}: {
  destination: string;
}): ReactElement => (
  <NavLink style={navLinkStyle} smooth to={`#${destination}`}>
    {destination}
  </NavLink>
);

const Nav = (): ReactElement => (
  <div style={navStyle}>
    <StyledNavLink destination="Home" />
    <StyledNavLink destination="Details" />
    <StyledNavLink destination="Accommodations" />
  </div>
);

export default Nav;
