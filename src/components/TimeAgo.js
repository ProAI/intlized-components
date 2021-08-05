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

function TimeAgo({ value, options }) {
  const intl = useIntl();

  return useMemo(() => intl.timeAgo(value, options), [intl.locale]);
}

TimeAgo.propTypes = propTypes;

export default TimeAgo;
