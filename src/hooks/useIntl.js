import { useContext } from 'react';
import isString from 'lodash.isstring';
import polyfillDateFormat from '../utils/polyfillDateFormat';
import translate from '../utils/translate';
import Context from '../Context';

export default function useIntl() {
  const { messages, locale, changeLocale, addMessages } = useContext(Context);

  const trans = value => {
    if (!value) return null;
    if (isString(value)) return value;

    const translation = translate(messages, locale, value);
    return translation;
  };

  const dateTime = (value, options) => {
    if (!value) return null;

    const instance = new Intl.DateTimeFormat(locale, options);
    return instance.format(new Date(polyfillDateFormat(value)));
  };

  const number = (value, options) => {
    if (!value) return null;

    const instance = new Intl.NumberFormat(locale, options);
    return instance.format(value);
  };

  const timeAgo = (value, options) => {
    if (!value) return null;

    const secondsPerMinute = 60;
    const secondsPerHour = 3600; // secondsPerMinute * 60
    const secondsPerDay = 86400; // secondsPerHour * 24
    const secondsPerWeek = 604800; // secondsPerHour * 7
    const secondsPerMonth = 2629800; // secondsPerDay * (365.25 / 12)
    const secondsPerYear = 31557600; // secondsPerDay * 365.25

    const diff =
      (new Date().getTime() - new Date(polyfillDateFormat(value)).getTime()) /
      1000;

    const instance = new Intl.RelativeTimeFormat(locale, options);

    if (diff < secondsPerMinute) {
      return instance.format(-Math.round(diff), 'second');
    }
    if (diff < secondsPerHour) {
      return instance.format(-Math.round(diff / secondsPerMinute), 'minute');
    }
    if (diff < secondsPerDay) {
      return instance.format(-Math.round(diff / secondsPerHour), 'hour');
    }
    if (diff < secondsPerWeek) {
      return instance.format(-Math.round(diff / secondsPerDay), 'day');
    }
    if (diff < secondsPerMonth) {
      return instance.format(-Math.round(diff / secondsPerWeek), 'week');
    }
    if (diff < secondsPerYear) {
      return instance.format(-Math.round(diff / secondsPerMonth), 'month');
    }

    return instance.format(-Math.round(diff / secondsPerYear), 'year');
  };

  return {
    locale,
    changeLocale,
    addMessages,
    trans,
    dateTime,
    number,
    timeAgo,
  };
}
