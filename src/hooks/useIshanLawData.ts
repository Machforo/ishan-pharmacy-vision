import { useQuery } from '@tanstack/react-query';

export function useIshanLawData(endpoint: string) {
  return useQuery({
    queryKey: ['ishan-law-institute', endpoint],
    queryFn: async () => {
      const response = await fetch(`https://ishan-backend-g096.onrender.com/api/Ishan Institute of Pharmacy/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint} data`);
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
}
