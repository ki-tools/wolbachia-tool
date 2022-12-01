import { useQuery } from '@tanstack/react-query';

export default function useCountryMeta() {
  return useQuery({
    queryKey: ['countryMeta'],
    queryFn: () => fetch('data/countryMeta.json').then((res) => res.json()),
  });
}
