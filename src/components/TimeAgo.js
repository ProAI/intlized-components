import { useMemo } from 'react';
import PropTypes from 'prop-types';
import useIntl from '../hooks/useIntl';

const propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.instanceOf(Date),
  ]),
};

function TimeAgo({ value }) {
  const intl = useIntl();

  return useMemo(() => {
    return intl.timeAgo(value);
  }, [intl.locale]);
}

TimeAgo.propTypes = propTypes;

export default TimeAgo;
