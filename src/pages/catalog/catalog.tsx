import { useState, type FC } from 'react';
import styles from './catalog.module.css';
import type { TSkill } from '../../entities/types';
import { SkillCard } from '../../widgets';
import { SectionHeader, Button, CheckboxDropdown } from '../../shared/ui';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../../entities/app-state-context/useAppState';
import { ACTION_TYPE } from '../../shared/lib/constants';
import {
  SKILL_CATEGORIES,
  SKILL_SUBCATEGORIES,
  CITIES,
  GENDER
} from '../../shared/ui/checkbox-dropdown/constants';

export const CatalogPage: FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppState();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const handleCategoryChange = (value: string) => {
    if (selectedCategories.includes(value)) {
      setSelectedCategories(selectedCategories.filter(v => v !== value));
      const subValues = SKILL_SUBCATEGORIES[value].map(s => s.value);
      setSelectedSubcategories(selectedSubcategories.filter(v => !subValues.includes(v)));
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  const handleSubcategoryChange = (value: string) => {
    if (selectedSubcategories.includes(value)) {
      setSelectedSubcategories(selectedSubcategories.filter(v => v !== value));
    } else {
      setSelectedSubcategories([...selectedSubcategories, value]);
    }
  };

  const filteredSkills = state.allSkillCards?.filter(skill => {
    if (selectedGender.length > 0 && !selectedGender.includes(skill.user.gender)) {
      return false;
    }

    if (selectedCities.length > 0 && !selectedCities.includes(skill.user.city)) {
      return false;
    }

    if (selectedSubcategories.length > 0 &&
      !selectedSubcategories.includes(skill.subcategory)) {
      return false;
    }

    return true;
  }) || [];

  const handleLikeToggle = (skill: TSkill) => {
    if (!state.isAuth) {
      navigate('/login');
      return;
    }

    if (state.favorites.some(fav => fav._id === skill._id)) {
      dispatch({ type: ACTION_TYPE.REMOVE_FAVORITE, payload: skill._id });
    } else {
      dispatch({ type: ACTION_TYPE.ADD_FAVORITE, payload: skill });
    }
  }

  const sections = [
    { title: 'Популярное', items: state.allSkillCards || [] },
  ];

  return (
    <main className={styles.containerMain}>
      <aside className={styles.filters}>
        <SectionHeader text='Фильтры' level='h3' />
        <CheckboxDropdown
          options={CITIES}
          selected={selectedCities}
          onChange={setSelectedCities}
          placeholder='Выберите город'
          label="Все города"
        />
        <CheckboxDropdown
          options={GENDER}
          selected={selectedGender}
          onChange={setSelectedGender}
          placeholder='Выберите пол'
          label="Не указан"
        />
        <CheckboxDropdown
          options={SKILL_CATEGORIES}
          selected={selectedCategories}
          onChange={(value: string[]) => {handleCategoryChange(value[0])}}
          placeholder='Выберите категорию'
          label="Все категории"
        />
        <CheckboxDropdown
          options={SKILL_SUBCATEGORIES[selectedCategories[0]]}
          selected={selectedSubcategories}
          onChange={(value: string[]) => {handleSubcategoryChange(value[0])}}
          placeholder='Выберите подкатегорию'
          label="Все подкатегории"
        />

      </aside>
      <div className={styles.catalogContent}>
        {sections.map(section => (
          <div key={section.title} className={styles.section}>
            <div className={styles.sectionHeader}>
              <SectionHeader text={section.title} />
              <Button variant='view-all' width={187}>Смотреть все</Button>
            </div>
            <div className={styles.cardGrid}>
              {filteredSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  user={skill.user}
                  canTeach={skill.canTeach}
                  wantsToLearn={skill.wantsToLearn}
                  onLikeToggle={() => handleLikeToggle(skill)}
                  isLiked={state.favorites.some(fav => fav._id === skill._id)}
                  onDetailsClick={() => { navigate(`/skill/${skill._id}`) }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

