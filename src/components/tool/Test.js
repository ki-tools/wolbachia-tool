import useCountryMeta from '../../services/useCountryMeta';

export default function Test() {
  const { isLoading, error, data } = useCountryMeta();

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  console.log(data);
  return 'success';
}
