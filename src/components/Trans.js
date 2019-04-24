import { useMemo } from 'react';
import PropTypes from 'prop-types';
import useIntl from '../hooks/useIntl';

const propTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  variables: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

function Trans({ id, defaultMessage, variables }) {
  const intl = useIntl();

  return useMemo(() => {
    return intl.trans({ id, defaultMessage, variables });
  }, [intl.locale]);
}

Trans.propTypes = propTypes;

export default Trans;
