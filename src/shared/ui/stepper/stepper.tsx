import type { FC } from 'react';
import styles from './stepper.module.css';
import type { TStepperUIProps } from './type';

export const StepperUI: FC<TStepperUIProps> = ({
  currentStep,
  totalSteps
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        Шаг {currentStep < totalSteps ? currentStep : totalSteps} из {totalSteps}
      </div>
      <div className={styles.steps}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`${styles.step} ${index < currentStep ? styles.active : styles.inactive}`}
          />
        ))}
      </div>
    </div>
  );
};
