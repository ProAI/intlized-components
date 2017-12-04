import isString from './isString';

export default function polyfillDateFormat(variable) {
  if (isString(variable)) {
    // replace dashes with slashes for IE and Safari support
    const response = variable.replace(/-/g, '/');
    return response;
  }

  return variable;
}
