function useIntersectionObserver(elementRef, options = {}) {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        if (!elementRef.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef, options]);

    return isVisible;
}

function AnimatedElement({ children, animation = 'fade-in', threshold = 0.1 }) {
    const elementRef = React.useRef(null);
    const isVisible = useIntersectionObserver(elementRef, { threshold });

    return (
        <div ref={elementRef} className={isVisible ? animation : ''}>
            {children}
        </div>
    );
}
