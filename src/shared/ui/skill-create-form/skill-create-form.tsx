import React from 'react';
import styles from './skill-create-form.module.css';
import { AppHeaderUI } from '../app-header';
import { StepperUI } from '../stepper';
import { SectionHeader } from '../section-header';

export const SkillCreateForm: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <AppHeaderUI isAuth={false} isCompact={true} />
      </div>
      <div className={styles.content}>
        <div className={styles.stepperContainer}>
          <StepperUI currentStep={3} totalSteps={3} />
        </div>
        <div className={styles.blocksRow}>
          <div className={styles.block}>
            {/* Здесь будет форма */}
          </div>
          <div className={styles.block}>
            {/* Здесь будет картинка */}
            <SectionHeader text="Укажите, чем вы готовы поделиться" level="h3" />
            <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 16, marginTop: 16 }}>
              Так другие люди смогут увидеть ваши предложения и предложить вам обмен!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 