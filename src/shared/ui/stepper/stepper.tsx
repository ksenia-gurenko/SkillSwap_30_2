import type { FC } from 'react';
import styles from './stepper.module.css';
import type { TStepperUIProps } from './type';

export const StepperUI: FC<TStepperUIProps> = ({ currentStep, totalSteps }) => {
  const safeTotalSteps = Math.max(totalSteps, 2);
  const safeCurrentStep = Math.min(Math.max(currentStep, 1), safeTotalSteps);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        Шаг {safeCurrentStep} из {safeTotalSteps}
      </div>
      <div className={styles.steps}>
        {Array.from({ length: safeTotalSteps }).map((_, index) => (
          <div
            key={index}
            className={`${styles.step} ${index < safeCurrentStep ? styles.active : styles.inactive}`}
          />
        ))}
      </div>
    </div>
  );
};
