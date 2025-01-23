import { useMemo } from 'react';
import useIntl from '../hooks/useIntl';

function Number({ value, options }) {
  const intl = useIntl();

  return useMemo(() => intl.number(value, options), [intl.locale]);
}

export default Number;
