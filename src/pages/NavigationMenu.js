import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

const NavigationMenu = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

NavigationMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationMenu;
