import React from 'react';
import { connect } from 'react-redux';
import translate from './utils/translate';
import injectIntl from './utils/injectIntl';
import isString from './utils/isString';
import connectOptions from './utils/connectOptions';

export default function intlized(RawComponent, intlizedPropKeys) {
  // create component from strings like div or input
  const Component = isString(RawComponent)
    ? props => React.createElement(RawComponent, props)
    : RawComponent;

  const mapStateToProps = (state, ownProps) => {
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
  };

  return connect(mapStateToProps, {}, null, connectOptions)(Component);
}
