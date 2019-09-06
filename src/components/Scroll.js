import React from 'react';
import PropTypes from 'prop-types';

const Scroll = ({ children }) => (
  <div
    style={{
      overflow: 'scroll',
      border: '1px solid #fff',
      height: '55vh',
    }}
  >
    {children}
  </div>
);

Scroll.propTypes = {
  children: PropTypes.object,
};
export default Scroll;
