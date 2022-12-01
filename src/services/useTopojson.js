import { useQuery } from '@tanstack/react-query';

export default function useTopojson(countryCode, pop) {
  return useQuery({
    queryKey: [`topo_${countryCode}_${pop}`],
    queryFn: () =>
      fetch(`data/${pop}/${countryCode}.topojson`).then((res) => res.json()),
  });
}
