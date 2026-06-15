import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(dependencies: any[] = []) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe the element and all children with reveal classes
    const observeElements = () => {
      const revealElements = el.querySelectorAll(".reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)");
      revealElements.forEach((child) => observer.observe(child));
      if (!el.classList.contains("revealed") && (el.classList.contains("reveal") || el.classList.contains("reveal-left") || el.classList.contains("reveal-right"))) {
        observer.observe(el);
      }
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, dependencies);

  return ref;
}
