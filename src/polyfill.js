import areIntlLocalesSupported from 'intl-locales-supported';

export default function polyfill(availableLocales) {
  if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!areIntlLocalesSupported(availableLocales)) {
      // `Intl` exists, but it doesn't have the data we need, so load the
      // polyfill and patch the constructors we need with the polyfill's.
      // eslint-disable-next-line global-require
      const IntlPolyfill = require('intl');
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  } else {
    // No `Intl`, so use and load the polyfill.
    // eslint-disable-next-line global-require
    global.Intl = require('intl');
  }
}
