import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { usePageLayout, SectionLayoutItem } from "@/hooks/usePageLayout";
import CustomSectionRenderer from "@/components/CustomSectionRenderer";
import PageGallery from "@/components/PageGallery";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getDefaultPharmacyOrder } from "@/lib/pageLayoutDefaults";

export interface DynamicPageSectionsProps {
  pageId: string;
  defaultSections?: Record<string, ReactNode>;
  defaultOrder?: string[];
  renderSection?: (sectionId: string) => ReactNode;
}

export default function DynamicPageSections({
  pageId,
  defaultSections,
  defaultOrder,
  renderSection,
}: DynamicPageSectionsProps) {
  const location = useLocation();
  if (typeof window !== "undefined") {
    (window as any).__renderedDynamicPagePath = location.pathname;
  }
  const { data: layoutData, isLoading } = usePageLayout(pageId);
  const containerRef = useScrollReveal([layoutData, defaultSections, pageId]);

  // Determine fallback order: explicitly provided defaultOrder > default config for pageId > keys of defaultSections > empty array
  const effectiveOrder: string[] =
    Array.isArray(defaultOrder) && defaultOrder.length > 0
      ? defaultOrder
      : (() => {
          const defaults = getDefaultPharmacyOrder(pageId);
          if (defaults.length > 0) return defaults;
          if (defaultSections && typeof defaultSections === "object") {
            return Object.keys(defaultSections);
          }
          return [];
        })();

  // Resolves a section node by its id from either renderSection or defaultSections or built-in elements
  const resolveSectionNode = (secId: string): ReactNode => {
    if (!secId) return null;
    const under = secId.replace(/-/g, "_");
    const dash = secId.replace(/_/g, "-");

    // 1. Try renderSection callback if provided
    if (typeof renderSection === "function") {
      try {
        const direct = renderSection(secId);
        if (direct !== undefined && direct !== null) return direct;
        const u = renderSection(under);
        if (u !== undefined && u !== null) return u;
        const d = renderSection(dash);
        if (d !== undefined && d !== null) return d;
      } catch (err) {
        console.error(`Error in renderSection for "${secId}":`, err);
      }
    }

    // 2. Try defaultSections dictionary if provided
    if (defaultSections && typeof defaultSections === "object") {
      const direct = defaultSections[secId];
      const u = defaultSections[under];
      const d = defaultSections[dash];
      const target = direct || u || d;
      if (target) {
        return target;
      }
    }

    // 3. Built-in gallery section placed in layout
    if (secId === "gallery" || secId === "page_gallery" || secId.includes("gallery")) {
      return <PageGallery key={secId} isInline={true} />;
    }

    return null;
  };

  // If loading or no valid sections array received, render fallback order
  if (isLoading || !layoutData || !Array.isArray(layoutData.sections) || layoutData.sections.length === 0) {
    return (
      <div ref={containerRef}>
        {effectiveOrder.map((id) => (
          <React.Fragment key={id}>{resolveSectionNode(id)}</React.Fragment>
        ))}
      </div>
    );
  }

  const sections: SectionLayoutItem[] = layoutData.sections;
  const renderedIds = new Set<string>();

  return (
    <div ref={containerRef}>
      {sections.map((sec) => {
        // Skip hidden sections
        if (sec.isHidden) {
          renderedIds.add(sec.id);
          renderedIds.add(sec.id.replace(/-/g, "_"));
          renderedIds.add(sec.id.replace(/_/g, "-"));
          return null;
        }

        const node = resolveSectionNode(sec.id);
        if (node) {
          renderedIds.add(sec.id);
          renderedIds.add(sec.id.replace(/-/g, "_"));
          renderedIds.add(sec.id.replace(/_/g, "-"));
          return <React.Fragment key={sec.id}>{node}</React.Fragment>;
        }

        // Built-in gallery section placed in layout
        if (sec.id === "gallery" || sec.id === "page_gallery" || sec.type === "gallery" || sec.id.includes("gallery")) {
          renderedIds.add(sec.id);
          return <PageGallery key={sec.id} isInline={true} />;
        }

        // Otherwise, render custom section (custom_html, hero, split, cards, cta, faq)
        if (
          sec.type === "custom_html" ||
          sec.htmlContent ||
          sec.type === "hero" ||
          sec.type === "split" ||
          sec.type === "cards" ||
          sec.type === "cta" ||
          sec.type === "faq"
        ) {
          return <CustomSectionRenderer key={sec.id} section={sec} />;
        }

        return null;
      })}

      {/* Crucial Safety: Render any default sections that were not returned by the backend layout and not hidden */}
      {effectiveOrder.map((id) => {
        if (
          !renderedIds.has(id) &&
          !renderedIds.has(id.replace(/-/g, "_")) &&
          !renderedIds.has(id.replace(/_/g, "-"))
        ) {
          const content = resolveSectionNode(id);
          if (content) {
            return <React.Fragment key={id}>{content}</React.Fragment>;
          }
        }
        return null;
      })}
    </div>
  );
}
