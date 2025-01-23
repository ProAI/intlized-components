import { useMemo } from 'react';
import useIntl from '../hooks/useIntl';

function TimeAgo({ value, options }) {
  const intl = useIntl();

  return useMemo(() => intl.timeAgo(value, options), [intl.locale]);
}

export default TimeAgo;
