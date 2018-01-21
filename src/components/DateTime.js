import PropTypes from 'prop-types';
import injectIntl from './injectIntl';
import intlProp from './intlProp';

const propTypes = {
  value: PropTypes.string.isRequired,
  // intlized component prop
  ...intlProp,
};

function DateTime({ intl, ...props }) {
  return intl.dateTime(props);
}

DateTime.propTypes = propTypes;

export default injectIntl(DateTime);
