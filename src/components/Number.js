import { useMemo } from 'react';
import PropTypes from 'prop-types';
import useIntl from '../hooks/useIntl';

const propTypes = {
  value: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object,
};

function Number({ value, options }) {
  const intl = useIntl();

  return useMemo(() => intl.number(value, options), [intl.locale]);
}

Number.propTypes = propTypes;

export default Number;
