import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import translate from '../utils/translate';

const enhance = connect((state, ownProps) => ({ value: translate(state, ownProps) }), {});

const propTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  variables: PropTypes.oneOf([PropTypes.object, PropTypes.func]),
};

function Trans({ value }) {
  return value;
}

Trans.propTypes = propTypes;

export default enhance(Trans);
