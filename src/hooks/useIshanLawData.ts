import { useQuery } from '@tanstack/react-query';

export function useIshanLawData(endpoint: string) {
  return useQuery({
    queryKey: ['ishan-law-institute', endpoint],
    queryFn: async () => {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiBase}/pharmacy/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint} data`);
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
}
