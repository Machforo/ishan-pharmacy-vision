import { useQuery } from "@tanstack/react-query";
import { getDefaultPharmacyOrder } from "@/lib/pageLayoutDefaults";

export interface SectionLayoutItem {
  id: string;
  name: string;
  type: 'builtin' | 'custom_html' | 'hero' | 'split' | 'cards' | 'cta' | 'faq' | 'gallery';
  order: number;
  isHidden: boolean;
  heading?: string;
  subheading?: string;
  description?: string;
  htmlContent?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  items?: any[];
  settings?: any;
}

export interface PageLayoutResponse {
  siteKey: string;
  pageId: string;
  sections: SectionLayoutItem[];
  isDefault?: boolean;
}

export function usePageLayout(pageId: string) {
  return useQuery<PageLayoutResponse>({
    queryKey: ["pharmacy-page-layout", pageId],
    queryFn: async () => {
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
      try {
        const response = await fetch(`${apiBase}/pharmacy/page-layout/${pageId}`);
        if (response.ok) {
          return await response.json();
        }
      } catch (err) {
        console.warn(`Could not load page layout from ${apiBase}:`, err);
      }
      // If primary failed and was not localhost, try local fallback
      if (apiBase !== "https://ishan-backend-g096.onrender.com/api") {
        try {
          const fb = await fetch(`https://ishan-backend-g096.onrender.com/api/pharmacy/page-layout/${pageId}`);
          if (fb.ok) return await fb.json();
        } catch {}
      }

      // Return realistic fallback sections based on default configuration
      const defaultOrder = getDefaultPharmacyOrder(pageId);
      return {
        siteKey: 'pharmacy',
        pageId,
        sections: defaultOrder.map((id, index) => ({
          id,
          name: id,
          type: 'builtin' as const,
          order: index,
          isHidden: false,
        })),
        isDefault: true,
      };
    },
    placeholderData: (previousData) => {
      if (previousData) return previousData;
      const defaultOrder = getDefaultPharmacyOrder(pageId);
      if (defaultOrder.length === 0) return undefined;
      return {
        siteKey: 'pharmacy',
        pageId,
        sections: defaultOrder.map((id, index) => ({
          id,
          name: id,
          type: 'builtin' as const,
          order: index,
          isHidden: false,
        })),
        isDefault: true,
      };
    },
    staleTime: 1000 * 30, // 30 seconds fresh
    refetchOnWindowFocus: true,
  });
}
