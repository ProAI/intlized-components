import React from 'react';
import PropTypes from 'prop-types';
import intlized from '../intlized';

const propTypes = {
  text: PropTypes.node.isRequired,
};

function Trans({ text }) {
  return <span>{text}</span>;
}

Trans.propTypes = propTypes;

export default intlized(['text'])(Trans);
