import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectIntl from '../utils/injectIntl';
import connectOptions from '../utils/connectOptions';

const propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = (state, ownProps) => {
  const translate = ownProps.render || ownProps.children;

  return {
    children: translate(injectIntl(state)),
  };
};

const enhance = connect(mapStateToProps, {}, null, connectOptions);

function Intl({ children }) {
  return children;
}

Intl.propTypes = propTypes;

export default enhance(Intl);
