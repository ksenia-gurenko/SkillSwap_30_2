import { useEffect, useRef, useState, type FC } from 'react';
import type { TOverflowTagsProps } from './type';
import { Badge, Tag } from '../../shared/ui';
import styles from './overflow-tags.module.css';

export const OverflowTags: FC<TOverflowTagsProps> = ({
  items,
  containerWidth,
  gap = 8
}) => {
  const [visibleCount, setVisibleCount] = useState(items.length);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      let totalWidth = 0;
      let fitCount = 0;
      const maxBadgeWidth = 50;
      totalWidth += maxBadgeWidth;

      const tags = Array.from(containerRef.current.childNodes) as HTMLElement[];
      tags.forEach((child) => {
        totalWidth += child.offsetWidth + gap;
        if (totalWidth <= containerWidth) fitCount++;
      });

      setVisibleCount(fitCount);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [items, gap]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ gap: `${gap}px`, width: `${containerWidth}px` }}
    >
      {items.slice(0, visibleCount).map((item) => (
        <Tag key={item} text={item} />
      ))}
      {visibleCount < items.length && (
        <Badge count={items.length - visibleCount} onClick={() => {}} />
      )}
    </div>
  );
};
