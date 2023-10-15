import React from 'react';
import PropTypes from 'prop-types';
import { Side } from '@components';

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <div />
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
