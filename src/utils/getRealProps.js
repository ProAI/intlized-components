export default function getRealProps(props, keyProps) {
  const newProps = { ...props };

  Object.keys(keyProps).forEach((propName) => {
    const key = keyProps[propName];
    delete newProps[key];
  });

  delete newProps.variables;

  return newProps;
}
