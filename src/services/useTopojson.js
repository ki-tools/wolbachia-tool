import { useQuery } from '@tanstack/react-query';

export default function useTopojson(countryCode, targetCriteria, pop) {
  return useQuery({
    queryKey: [`topo_${countryCode}_${pop}`],
    queryFn: () =>
      fetch(`data/${targetCriteria}/${pop}/${countryCode}.topojson`).then(
        (res) => res.json()
      ),
  });
}
