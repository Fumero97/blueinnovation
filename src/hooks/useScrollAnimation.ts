import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe the element itself and all children with scroll-fade-in
    const targets = el.querySelectorAll(".scroll-fade-in");
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains("scroll-fade-in")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
