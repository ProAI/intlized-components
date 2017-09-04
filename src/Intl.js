import createReducer from './createReducer';

export default class Intl {
  constructor(config) {
    this.currentLocale = config.currentLocale || 'en';
    this.defaultLocale = config.defaultLocale || 'en';
    this.locales = config.locales || ['en'];
    this.messages = config.messages;
  }

  reducer() {
    return createReducer(this.currentLocale, this.defaultLocale, this.locales, this.messages);
  }
}
