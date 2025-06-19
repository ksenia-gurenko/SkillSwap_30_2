import React, { useState, useMemo, useRef } from 'react';
import styles from './skill-create-form.module.css';
import { AppHeaderUI } from '../app-header';
import { StepperUI } from '../stepper';
import { SectionHeader } from '../section-header';
import { Input } from '../input';
import { CheckboxDropdown } from '../checkbox-dropdown/checkbox-dropdown';
import { SKILL_CATEGORIES, SKILL_SUBCATEGORIES } from '../checkbox-dropdown/constants';
import imageIcon from '../button/Icon_right.svg';
import galleryAddIcon from './gallery-add.svg';
import { Button } from '../button';
import schoolBoardIcon from './school-board.svg';

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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Получаем список подкатегорий для выбранных категорий
  const subcategoryOptions = useMemo(() => {
    if (category.length === 0) return [];
    return category.flatMap(cat => SKILL_SUBCATEGORIES[cat] || []);
  }, [category]);

  // Валидация
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = 'Название обязательно';
    else if (title.trim().length < 3) newErrors.title = 'Минимум 3 символа';
    else if (title.trim().length > 50) newErrors.title = 'Максимум 50 символов';
    if (category.length === 0) newErrors.category = 'Выберите категорию';
    if (subcategory.length === 0) newErrors.subcategory = 'Выберите подкатегорию';
    else if (subcategory.length > 5) newErrors.subcategory = 'Не более 5 подкатегорий';
    if (image) {
      if (!['image/jpeg', 'image/png'].includes(image.type)) newErrors.image = 'Только jpeg или png';
      if (image.size > 2 * 1024 * 1024) newErrors.image = 'Файл не больше 2MB';
    }
    return newErrors;
  };

  React.useEffect(() => {
    setErrors(validate());
  }, [title, category, subcategory, image]);

  const isSubmitDisabled =
    !!Object.keys(errors).length ||
    !title.trim() ||
    category.length === 0 ||
    subcategory.length === 0;

  // Drag&Drop обработчики
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setTouched(t => ({ ...t, image: true }));
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setTouched(t => ({ ...t, image: true }));
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
          <div className={styles.block + ' ' + styles.block_left}>
            <div className={styles.formFields}>
              <div className={styles.formField}>
                <label className={styles.label}>Название навыка</label>
                <input
                  type="text"
                  className={errors.title && touched.title ? styles.textarea + ' ' + styles.inputError : styles.textarea}
                  placeholder="Введите название вашего навыка"
                  style={{ minHeight: 0 }}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  onBlur={() => setTouched(t => ({ ...t, title: true }))}
                  maxLength={50}
                  required
                />
                {errors.title && touched.title && <div className={styles.errorText}>{errors.title}</div>}
              </div>
              <div className={styles.formField}>
                <CheckboxDropdown
                  label="Категория навыка"
                  placeholder="Выберите категорию навыка"
                  options={SKILL_CATEGORIES}
                  selected={category}
                  onChange={val => { setCategory(val); setTouched(t => ({ ...t, category: true })); }}
                />
                {errors.category && touched.category && <div className={styles.errorText}>{errors.category}</div>}
              </div>
              <div className={styles.formField}>
                <CheckboxDropdown
                  label="Подкатегория навыка"
                  placeholder="Выберите подкатегорию навыка"
                  options={subcategoryOptions}
                  selected={subcategory}
                  onChange={val => { setSubcategory(val); setTouched(t => ({ ...t, subcategory: true })); }}
                  disabled={category.length === 0}
                />
                {errors.subcategory && touched.subcategory && <div className={styles.errorText}>{errors.subcategory}</div>}
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Описание</label>
                <textarea
                  className={errors.description && touched.description ? styles.textarea + ' ' + styles.textareaError : styles.textarea}
                  placeholder="Коротко опишите, чему можете научить"
                  rows={4}
                  maxLength={500}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  onBlur={() => setTouched(t => ({ ...t, description: true }))}
                />
                {errors.description && touched.description && <div className={styles.errorText}>{errors.description}</div>}
              </div>
              <div className={styles.formField}>
                <div
                  className={styles.imageDrop + (errors.image && touched.image ? ' ' + styles.inputError : '')}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <div className={styles.imageDropText}>Перетащите или выберите изображения навыка</div>
                  <button
                    type="button"
                    className={styles.imageButton}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <img src={galleryAddIcon} alt="Галерея" style={{ marginRight: 4, verticalAlign: 'middle' }} />
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
                {errors.image && touched.image && <div className={styles.errorText}>{errors.image}</div>}
              </div>
              <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
                <Button paddingX={80}>Назад</Button>
                <Button fill paddingX={55} disabled={isSubmitDisabled}>Продолжить</Button>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <img src={schoolBoardIcon} alt="Доска" style={{ width: '100%', maxWidth: 300, margin: '10px auto 40px', display: 'block' }} />
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