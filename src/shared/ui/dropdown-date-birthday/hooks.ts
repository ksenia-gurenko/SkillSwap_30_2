import { useState, useEffect } from 'react';

/**
 * Хук для управления анимацией появления/исчезновения элементов
 * @param isVisible - флаг видимости элемента
 * @param delay - задержка анимации в миллисекундах
 * @returns флаг видимости для анимации
 */
export const useTransitionState = (isVisible: boolean, delay = 100) => {
  const [isVisibleForTransition, setIsVisibleForTransition] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsVisibleForTransition(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisibleForTransition(false);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return isVisibleForTransition;
};
