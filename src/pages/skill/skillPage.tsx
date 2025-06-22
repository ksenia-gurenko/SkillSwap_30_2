import { useEffect, useState } from 'react';
import { Button } from '../../shared/ui/button';
import { IconButtonUI } from '../../shared/ui/icon';
import { RelatedSkills } from './related-skills';
import { ICON_TYPE } from '../../shared/lib/constants';
import styles from './styles.module.css';
import type { TSkill } from '../../entities/types';
import { useAppState } from '../../entities/app-state-context/useAppState';
import { useParams } from 'react-router-dom';
import { SkillCard } from '../../widgets';

type SkillPageProps = {
  mockSkill?: TSkill | null;
  mockRelatedSkills?: TSkill[];
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
  const { state, dispatch } = useAppState();
  const [skill, setSkill] = useState<TSkill | null>(mockSkill || null);
  const [relatedSkills, setRelatedSkills] = useState<TSkill[]>(
    mockRelatedSkills || []
  );
  const [isLoading, setIsLoading] = useState(mockLoading ?? true);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState(mockError || null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const drumPhotos = [
    '/assets/drums.png',
    '/assets/drums(1).png',
    '/assets/drums(2).png',
    '/assets/drums+3.png'
  ];

  const getSafeUserData = () => {
    if (!skill)
      return {
        avatar: '/default-avatar.jpg',
        name: 'Неизвестный пользователь',
        city: 'Город не указан',
        age: 0
      };

    return {
      avatar: skill.user?.avatar || '/default-avatar.jpg',
      name: skill.user?.name || 'Неизвестный пользователь',
      city: skill.user?.city || 'Город не указан',
      age:
        typeof skill.user?.age === 'string'
          ? parseInt(skill.user.age) || 0
          : skill.user?.age || 0
    };
  };

  useEffect(() => {
    if (mockSkill || mockLoading !== undefined || mockError) return;

    const loadData = async () => {
      setIsLoading(true);
      try {
        if (!id) throw new Error('ID не указан');

        const skillData = state.allSkillCards.find(skill => skill._id === id);
        if (!skillData) throw new Error('Навык не найден');

        setSkill(skillData);
        const related = state.allSkillCards
          .filter(skill => skill._id !== id && skill.category === skillData.category);

        setRelatedSkills(related.slice(0, 4));
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Не удалось загрузить данные');
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
    setCurrentPhotoIndex((prev) =>
      prev > 0 ? prev - 1 : drumPhotos.length - 1
    );
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev < drumPhotos.length - 1 ? prev + 1 : 0
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!skill) return <div className={styles.error}>Навык не найден</div>;

  const user = getSafeUserData();

  return (
    <div className={styles.containerMain}>
      <div className={styles.contentWrapper}>
        <main className={styles.content}>
          <div className={styles.userInfoCard}>
            <SkillCard
              user={skill.user}
              canTeach={skill.canTeach}
              wantsToLearn={skill.wantsToLearn}
              isCompact={true}
            />
          </div>

          <div className={styles.skillInfoCard}>
            <div className={styles.likeButtonContainer}>
              <IconButtonUI
                type={ICON_TYPE.LIKE}
                isActive={isLiked}
                onClick={handleLikeToggle}
              />
            </div>

            <div className={styles.cardContent}>
              <div className={styles.textContent}>
                <h1 className={styles.skillTitle}>{skill.title}</h1>
                <p className={styles.skillCategory}>{skill.category}</p>
                <p className={styles.skillDescription}>{skill.description}</p>
                <div className={styles.exchangeButton}>
                  <Button
                    width={284}
                    fill
                    onClick={handleExchangeRequest}
                  >
                    Предложить обмен
                  </Button>
                </div>
              </div>

              <div className={styles.photoSection}>
                <div className={styles.mainPhotoContainer}>
                  <img
                    src={drumPhotos[currentPhotoIndex]}
                    alt={`Фото навыка ${currentPhotoIndex + 1}`}
                    className={styles.mainPhoto}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        '/default-avatar.jpg';
                    }}
                  />
                  <button
                    className={`${styles.photoNavButton} ${styles.prevButton}`}
                    onClick={handlePrevPhoto}
                    aria-label='Предыдущее фото'
                  >
                    <svg width='6' height='12' viewBox='0 0 6 12' fill='none'>
                      <path
                        d='M5.20677 11.3327C5.32366 11.3327 5.44056 11.2896 5.53284 11.1973C5.71126 11.0189 5.71126 10.7236 5.53284 10.5452L1.5215 6.53384C1.22619 6.23852 1.22619 5.75864 1.5215 5.46332L5.53284 1.45198C5.71126 1.27356 5.71126 0.978248 5.53284 0.79983C5.35442 0.621411 5.05911 0.621411 4.88069 0.79983L0.86935 4.81117C0.555576 5.12494 0.377158 5.54946 0.377158 5.99858C0.377158 6.4477 0.549422 6.87222 0.86935 7.18599L4.88069 11.1973C4.97298 11.2835 5.08987 11.3327 5.20677 11.3327Z'
                        fill='#69735D'
                      />
                    </svg>
                  </button>
                  <button
                    className={`${styles.photoNavButton} ${styles.nextButton}`}
                    onClick={handleNextPhoto}
                    aria-label='Следующее фото'
                  >
                    <svg width='6' height='12' viewBox='0 0 6 12' fill='none'>
                      <path
                        d='M0.793233 11.3327C0.676338 11.3327 0.559443 11.2896 0.467157 11.1973C0.288739 11.0189 0.288739 10.7236 0.467157 10.5452L4.4785 6.53384C4.77381 6.23852 4.77381 5.75864 4.4785 5.46332L0.467157 1.45198C0.288739 1.27356 0.288739 0.978248 0.467157 0.79983C0.645576 0.621411 0.940889 0.621411 1.11931 0.79983L5.13065 4.81117C5.44442 5.12494 5.62284 5.54946 5.62284 5.99858C5.62284 6.4477 5.45058 6.87222 5.13065 7.18599L1.11931 11.1973C1.02702 11.2835 0.910128 11.3327 0.793233 11.3327Z'
                        fill='#69735D'
                      />
                    </svg>
                  </button>
                </div>

                <div className={styles.thumbnails}>
                  {drumPhotos.slice(0, 3).map((photo, index) => (
                    <div
                      key={index}
                      className={`${styles.thumbnail} ${index === currentPhotoIndex
                        ? styles.activeThumbnail
                        : ''
                        }`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img
                        src={photo}
                        alt={`Миниатюра ${index + 1}`}
                        className={styles.thumbnailImage}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            '/default-avatar.jpg';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {relatedSkills.length > 0 && (
        <div className={styles.relatedSkillsWrapper}>
          <div className={styles.relatedSkillsContainer}>
            <div className={styles.relatedSkillsHeader}>
              <h2>Похожие предложения</h2>
            </div>
            <div className={styles.relatedSkillsGrid}>
              <RelatedSkills skills={relatedSkills} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
