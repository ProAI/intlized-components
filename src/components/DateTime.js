import { useMemo } from 'react';
import useIntl from '../hooks/useIntl';

function DateTime({ value, options }) {
  const intl = useIntl();

  return useMemo(() => intl.dateTime(value, options), [intl.locale]);
}

export default DateTime;
