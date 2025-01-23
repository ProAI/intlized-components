import { useMemo } from 'react';
import useIntl from '../hooks/useIntl';

function Trans({ id, defaultMessage, variables }) {
  const intl = useIntl();

  return useMemo(
    () => intl.trans({ id, defaultMessage, variables }),
    [intl.locale],
  );
}

export default Trans;
