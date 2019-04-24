import PropTypes from 'prop-types';
import useIntl from '../hooks/useIntl';

const propTypes = {
  children: PropTypes.func,
};

function Intl({ children: render }) {
  const intl = useIntl();

  return render(intl);
}

Intl.propTypes = propTypes;

export default Intl;
