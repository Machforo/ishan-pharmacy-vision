import { useQuery } from '@tanstack/react-query';

export function usePharmacyData(endpoint: string) {
  return useQuery({
    queryKey: ['pharmacy', endpoint],
    queryFn: async () => {
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
      const response = await fetch(`${apiBase}/pharmacy/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint} data`);
      }
      return response.json();
    },
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: true,
    retry: 2,
  });
}
