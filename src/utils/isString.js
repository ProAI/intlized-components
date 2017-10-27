export default function isString(variable) {
  return typeof variable === 'string' || variable instanceof String;
}
