import { useMemo } from 'react';
import PropTypes from 'prop-types';
import useIntl from '../hooks/useIntl';

const propTypes = {
  value: PropTypes.number.isRequired,
};

function Number({ value }) {
  const intl = useIntl();

  return useMemo(() => {
    return intl.number(value);
  }, [intl.locale]);
}

Number.propTypes = propTypes;

export default Number;
