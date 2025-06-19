import React, { useState, useMemo, useRef } from 'react';
import styles from './skill-create-form.module.css';
import { AppHeaderUI } from '../app-header';
import { StepperUI } from '../stepper';
import { SectionHeader } from '../section-header';
import { Input } from '../input';
import { CheckboxDropdown } from '../checkbox-dropdown/checkbox-dropdown';
import { SKILL_CATEGORIES, SKILL_SUBCATEGORIES } from '../checkbox-dropdown/constants';
import imageIcon from '../button/Icon_right.svg';

// Примерные опции для демонстрации
const categoryOptions = [
  { label: 'Дизайн', value: 'design' },
  { label: 'Программирование', value: 'coding' },
  { label: 'Языки', value: 'languages' },
];

export const SkillCreateForm: React.FC = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [subcategory, setSubcategory] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Получаем список подкатегорий для выбранных категорий
  const subcategoryOptions = useMemo(() => {
    if (category.length === 0) return [];
    // Собираем все подкатегории для выбранных категорий
    return category.flatMap(cat => SKILL_SUBCATEGORIES[cat] || []);
  }, [category]);

  // Drag&Drop обработчики
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) {
      setImage(file);
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      setImage(file);
    }
  };
  const validateFile = (file: File) => {
    const isValidType = ['image/jpeg', 'image/png'].includes(file.type);
    const isValidSize = file.size <= 2 * 1024 * 1024;
    return isValidType && isValidSize;
  };

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
            <div className={styles.formFields}>
              <div className={styles.formField}>
                <label className={styles.label}>Название навыка</label>
                <input
                  type="text"
                  className={styles.textarea}
                  placeholder="Введите название вашего навыка"
                  style={{ minHeight: 0 }}
                />
              </div>
              <div className={styles.formField}>
                <CheckboxDropdown
                  label="Категория навыка"
                  placeholder="Выберите категорию навыка"
                  options={SKILL_CATEGORIES}
                  selected={category}
                  onChange={setCategory}
                />
              </div>
              <div className={styles.formField}>
                <CheckboxDropdown
                  label="Подкатегория навыка"
                  placeholder="Выберите подкатегорию навыка"
                  options={subcategoryOptions}
                  selected={subcategory}
                  onChange={setSubcategory}
                  disabled={category.length === 0}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Описание</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Коротко опишите, чему можете научить"
                  rows={4}
                  maxLength={500}
                />
              </div>
              <div className={styles.formField}>
                <div
                  className={styles.imageDrop}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <div className={styles.imageDropText}>Перетащите или выберите изображения навыка</div>
                  <button
                    type="button"
                    className={styles.imageButton}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <img src={imageIcon} alt="Выбрать" style={{ marginRight: 8, verticalAlign: 'middle' }} />
                    <span>Выбрать изображения</span>
                  </button>
                  <input
                    type="file"
                    accept="image/jpeg,image/png"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  {image && <div className={styles.imageName}>{image.name}</div>}
                </div>
              </div>
            </div>
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