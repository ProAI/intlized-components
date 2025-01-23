import useIntl from '../hooks/useIntl';

function Intl({ children: render }) {
  const intl = useIntl();

  return render(intl);
}

export default Intl;
