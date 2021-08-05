import { useMemo } from 'react';
import PropTypes from 'prop-types';
import useIntl from '../hooks/useIntl';

const propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.instanceOf(Date),
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object,
};

function DateTime({ value, options }) {
  const intl = useIntl();

  return useMemo(() => intl.dateTime(value, options), [intl.locale]);
}

DateTime.propTypes = propTypes;

export default DateTime;
