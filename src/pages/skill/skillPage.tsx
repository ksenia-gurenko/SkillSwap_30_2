import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppHeaderUI } from '../../shared/ui/app-header';
import { FooterUI } from '../../shared/ui/footer';
import { Button } from '../../shared/ui/button';
import { IconButtonUI } from '../../shared/ui/icon'; 
import { UserInfoUI } from '../../shared/ui/user-info'; // Добавлен UserInfoUI
import { OverflowTags } from '../../widgets/overflow-tags'; // Добавлен OverflowTags
//import { SkillCard } from '../../widgets/skill-card';
import { RelatedSkills } from './related-skills';
import { fetchSkillById, fetchRelatedSkills } from '../../entities/skill/api';
import type { Skill } from '../../entities/skill/model';
import { ICON_TYPE } from '../../shared/lib/constants';
import styles from './styles.module.css';

type SkillPageProps = {
  mockSkill?: Skill;
  mockRelatedSkills?: Skill[];
  mockLoading?: boolean;
  mockError?: string;
};

export const SkillPage = ({
  mockSkill,
  mockRelatedSkills,
  mockLoading,
  mockError
}: SkillPageProps) => {
  const { id } = useParams<{ id: string }>();
  const [skill, setSkill] = useState<Skill | null>(mockSkill || null);
  const [relatedSkills, setRelatedSkills] = useState<Skill[]>(mockRelatedSkills || []);
  const [isLoading, setIsLoading] = useState(mockLoading ?? true);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState(mockError || null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    skill?.author.avatarUrl || '/default-avatar.jpg',
    '/photo1.jpg',
    '/photo2.jpg',
    '/photo3.jpg'
  ];

  useEffect(() => {
    if (mockSkill || mockLoading !== undefined || mockError) return;

    const loadData = async () => {
      try {
        const skillData = await fetchSkillById(id!);
        setSkill(skillData);
        const related = await fetchRelatedSkills(skillData.category, id!);
        setRelatedSkills(related.slice(0, 4));
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка при загрузке данных');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [id, mockSkill, mockLoading, mockError]);

  const handleExchangeRequest = () => {
    alert(`Заявка на обмен по навыку "${skill?.title}" отправлена!`);
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!skill) return <div className={styles.error}>Навык не найден</div>;

   
  return (
    <div className={styles.page}>
      <AppHeaderUI isAuth={false} />
      <main className={styles.content}>
        {/* Левая карточка с модифицированным содержимым SkillCard */}
        <div className={styles.leftCard}>
          <div className={styles.skillCardContainer}>
            <div className={styles.customSkillCard}>
              <div className={styles.cardHeader}>
                <UserInfoUI
                  src={skill.author.avatarUrl || ''}
                  name={skill.author.name}
                  city={skill.author.city || 'Город не указан'}
                  age={skill.author.age || 0}
                />
              </div>

              <div className={styles.cardSkills}>
                <div className={styles.skillSection}>
                  <div className={styles.sectionTitle}>Может научить:</div>
                  <div className={styles.skillTags}>
                    <OverflowTags
                      items={[skill.title]}
                      containerWidth={284}
                      gap={8}
                    />
                  </div>
                </div>
                <div className={styles.skillSection}>
                  <div className={styles.sectionTitle}>Хочет научиться:</div>
                  <div className={styles.skillTags}>
                    <OverflowTags
                      items={skill.wantsToLearn || []}
                      containerWidth={284}
                      gap={8}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Правая карточка */}
        <div className={styles.rightCard}>
          <div className={styles.likeButtonContainer}>
            <IconButtonUI
              type={ICON_TYPE.LIKE}
              isActive={isLiked}
              onClick={handleLikeToggle}
            />
          </div>
          
          <div className={styles.cardContent}>
            {/* Левая часть - текстовая информация */}
            <div className={styles.textContent}>
              <h1 className={styles.skillTitle}>{skill.title}</h1>
              <p className={styles.skillCategory}>{skill.category}</p>
              <p className={styles.skillDescription}>{skill.description}</p>
              <div className={styles.exchangeButton}>
                <Button 
                  width={284}
                  fill
                  onClick={handleExchangeRequest}
                  disabled={!skill.isAvailable}
                >
                  Предложить обмен
                </Button>
              </div>
            </div>
            
            {/* Правая часть - фотографии */}
            <div className={styles.photoSection}>
              <div className={styles.mainPhotoContainer}>
                <img 
                  src={photos[currentPhotoIndex]} 
                  alt={`Фото ${currentPhotoIndex + 1}`}
                  className={styles.mainPhoto}
                />
                <button 
                  className={`${styles.photoNavButton} ${styles.prevButton}`}
                  onClick={handlePrevPhoto}
                  aria-label="Предыдущее фото"
                >
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                    <path d="M5.20677 11.3327C5.32366 11.3327 5.44056 11.2896 5.53284 11.1973C5.71126 11.0189 5.71126 10.7236 5.53284 10.5452L1.5215 6.53384C1.22619 6.23852 1.22619 5.75864 1.5215 5.46332L5.53284 1.45198C5.71126 1.27356 5.71126 0.978248 5.53284 0.79983C5.35442 0.621411 5.05911 0.621411 4.88069 0.79983L0.86935 4.81117C0.555576 5.12494 0.377158 5.54946 0.377158 5.99858C0.377158 6.4477 0.549422 6.87222 0.86935 7.18599L4.88069 11.1973C4.97298 11.2835 5.08987 11.3327 5.20677 11.3327Z" fill="#69735D"/>
                  </svg>
                </button>
                <button 
                  className={`${styles.photoNavButton} ${styles.nextButton}`}
                  onClick={handleNextPhoto}
                  aria-label="Следующее фото"
                >
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                    <path d="M0.793233 11.3327C0.676338 11.3327 0.559443 11.2896 0.467157 11.1973C0.288739 11.0189 0.288739 10.7236 0.467157 10.5452L4.4785 6.53384C4.77381 6.23852 4.77381 5.75864 4.4785 5.46332L0.467157 1.45198C0.288739 1.27356 0.288739 0.978248 0.467157 0.79983C0.645576 0.621411 0.940889 0.621411 1.11931 0.79983L5.13065 4.81117C5.44442 5.12494 5.62284 5.54946 5.62284 5.99858C5.62284 6.4477 5.45058 6.87222 5.13065 7.18599L1.11931 11.1973C1.02702 11.2835 0.910128 11.3327 0.793233 11.3327Z" fill="#69735D"/>
                  </svg>
                </button>
              </div>
              
              <div className={styles.thumbnails}>
                {photos.slice(0, 3).map((photo, index) => (
                  <div 
                    key={index}
                    className={`${styles.thumbnail} ${
                      index === currentPhotoIndex ? styles.activeThumbnail : ''
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={photo}
                      alt={`Миниатюра ${index + 1}`}
                      className={styles.thumbnailImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className={styles.relatedSkillsHeader}>
        <h2>Похожие предложения</h2>
      </div>
      <RelatedSkills skills={relatedSkills} />
      
      <FooterUI />
    </div>
  );
};