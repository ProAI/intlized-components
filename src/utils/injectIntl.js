import IntlRelativeFormat from 'intl-relativeformat';
import polyfillDateFormat from './polyfillDateFormat';
import translate from './translate';

export default function injectIntl(state) {
  return {
    trans: (value) => {
      if (!value) return null;

      const translation = translate(state, value);
      return translation;
    },
    dateTime: (value, options) => {
      if (!value) return null;

      const instance = new Intl.DateTimeFormat(state.intl.locale, options);
      return instance.format(new Date(polyfillDateFormat(value)));
    },
    number: (value, options) => {
      if (!value) return null;

      const instance = new Intl.NumberFormat(state.intl.locale, options);
      return instance.format(value);
    },
    timeAgo: (value, options) => {
      if (!value) return null;

      const instance = new IntlRelativeFormat(state.intl.locale, options);
      return instance.format(new Date(polyfillDateFormat(value)));
    },
    locale: state.intl.locale,
  };
}
