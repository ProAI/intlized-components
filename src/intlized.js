import { connect } from 'react-redux';
import translate from './utils/translate';
import injectIntl from './utils/injectIntl';
import isString from './utils/isString';

export default function intlized(Component, intlizedPropKeys) {
  return connect((state, ownProps) => {
    const stateProps = {};

    // translate intlized props
    intlizedPropKeys.forEach((key) => {
      if (ownProps[key]) {
        if (typeof ownProps[key] === 'function') {
          stateProps[key] = ownProps[key](injectIntl(state));
        } else if (!isString(ownProps[key])) {
          stateProps[key] = translate(state, ownProps[key]);
        }
      }
    });

    return stateProps;
  }, {})(Component);
}
