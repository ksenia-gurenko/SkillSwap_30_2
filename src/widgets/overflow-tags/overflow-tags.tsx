import { useEffect, useRef, useState, type FC } from "react";
import type { TOverflowTagsProps } from "./type";
import { Badge, Tag } from "../../shared/ui";

export const OverflowTags: FC<TOverflowTagsProps> = ({
    items,
    gap
}) => {
    const [visibleCount, setVisibleCount] = useState(items.length);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkOverflow = () => {
            if (!containerRef.current) return;
            const containerWidth = containerRef.current.offsetWidth;
            let totalWidth = 0;
            let fitCount = 0;

            const tags = Array.from(containerRef.current.childNodes) as HTMLElement[];
            tags.forEach(child => {
                totalWidth += child.offsetWidth + gap;
                if (totalWidth <= containerWidth) fitCount++;
            });

            setVisibleCount(fitCount);
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [items]);

    return (
        <div ref={containerRef} className="overflow-container">
            {items.slice(0, visibleCount).map(item => (
                <Tag key={item} text={item} />
            ))}
            {visibleCount < items.length && (
                <Badge count={items.length - visibleCount} />
            )}
        </div>
    );
}