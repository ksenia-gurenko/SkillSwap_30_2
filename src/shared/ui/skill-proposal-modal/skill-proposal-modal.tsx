import React from 'react';
import styles from './skill-proposal-modal.module.css';
import { SectionHeader } from '../section-header';
import { Button } from '../button';

interface SkillProposalModalProps {
  title: string;
  subcategories: string[];
  description: string;
  images: string[];
  onEdit: () => void;
  onConfirm: () => void;
  onClose: () => void;
}

export const SkillProposalModal: React.FC<SkillProposalModalProps> = ({
  title,
  subcategories,
  description,
  images,
  onEdit,
  onConfirm,
  onClose
}) => (
  <div className={styles.modalOverlay} onClick={onClose}>
    <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
      <SectionHeader text='Ваше предложение' level='h3' />
      <p className={styles.modalSubtext}>
        Пожалуйста, проверьте и подтвердите правильность данных
      </p>
      <div className={styles.modalContent}>
        <div className={styles.modalLeft}>
          <SectionHeader text={title} level='h2' />
          <div className={styles.modalSubcategories}>
            {subcategories.join(' / ')}
          </div>
          <div className={styles.modalDescription}>{description}</div>
          <div className={styles.modalButtons}>
            <Button variant='edit' onClick={onEdit}>
              Редактировать
            </Button>
            <Button fill paddingX={55} width={204} onClick={onConfirm}>
              Готово
            </Button>
          </div>
        </div>
        <div className={styles.modalRight}>
          <div className={styles.imagesGrid}>
            {images.length > 0 && (
              <img src={images[0]} className={styles.mainImage} alt='' />
            )}
            <div className={styles.thumbsColumn}>
              {images.slice(1, 4).map((img, i) => (
                <div className={styles.thumbWrapper} key={i}>
                  <img src={img} className={styles.thumb} alt='' />
                  {i === 2 && images.length > 4 && (
                    <div className={styles.thumbOverlay}>
                      +{images.length - 3}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 24,
          right: 32,
          background: 'none',
          border: 'none',
          fontSize: 24,
          cursor: 'pointer'
        }}
        aria-label='Закрыть'
      >
        ×
      </button>
    </div>
  </div>
);
