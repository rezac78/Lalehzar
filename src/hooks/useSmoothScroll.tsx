import { useCallback } from 'react';

export default function useSmoothScroll() {
        const smoothScrollTo = useCallback((targetY: number, duration: number) => {
                const startY = window.scrollY;
                const change = targetY - startY;
                let currentTime = 0;
                const increment = 20;

                const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
                        t /= d / 2;
                        if (t < 1) return (c / 2) * t * t + b;
                        t--;
                        return (-c / 2) * (t * (t - 2) - 1) + b;
                };

                const animateScroll = () => {
                        currentTime += increment;
                        const val = easeInOutQuad(currentTime, startY, change, duration);
                        window.scrollTo(0, val);
                        if (currentTime < duration) {
                                setTimeout(animateScroll, increment);
                        }
                };

                animateScroll();
        }, []);

        const scrollToElement = useCallback((elementId: string, offset = 0, duration = 1000) => {
                if (typeof window !== "undefined") {
                        const sectionElement = document.getElementById(elementId);
                        if (sectionElement) {
                                const scrollToPosition = sectionElement.offsetTop - (window.innerHeight / 2) + (sectionElement.offsetHeight / 2) + offset;
                                smoothScrollTo(scrollToPosition, duration);
                        }
                }
        }, [smoothScrollTo]);

        return scrollToElement;
};
