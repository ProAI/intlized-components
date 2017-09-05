import createReducer from './createReducer';

export default class IntlClient {
  constructor(config) {
    this.locale = config.locale || 'en';
    this.defaultLocale = config.defaultLocale || 'en';
    this.supportedLocales = config.supportedLocales || ['en'];
    this.messages = config.messages;
  }

  reducer() {
    return createReducer(this.locale, this.defaultLocale, this.supportedLocales, this.messages);
  }
}
