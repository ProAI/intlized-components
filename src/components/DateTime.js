import { useMemo } from 'react';
import PropTypes from 'prop-types';
import useIntl from '../hooks/useIntl';

const propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.instanceOf(Date),
  ]),
};

function DateTime({ value }) {
  const intl = useIntl();

  return useMemo(() => {
    return intl.dateTime(value);
  }, [intl.locale]);
}

DateTime.propTypes = propTypes;

export default DateTime;
