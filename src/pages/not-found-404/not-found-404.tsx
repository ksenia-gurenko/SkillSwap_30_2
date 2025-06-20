import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import styles from './not-found-404.module.css';
import { AppHeaderUI } from '../../shared/ui/app-header';
import { FooterUI } from '../../shared/ui/footer';
import { Button } from '../../shared/ui/button';
import Error404Svg from './error-404.svg';

export const NotFound404Page: FC = () => {
  const navigate = useNavigate();

  // Обработчик клика по кнопке "На главную"
  const handleGoToMain = () => {
    navigate('/');
  };

  // Обработчик клика по кнопке "Сообщить об ошибке"
  const handleReportError = () => {
    // Здесь логика отправки сообщения об ошибке
    console.log('Сообщение об ошибке отправлено');
  };

  return (
    <div className={styles.page}>
      {/* Шапка приложения */}
      <AppHeaderUI isAuth={false} isCompact={false} />

      {/* Контент */}
      <main className={styles.content}>
        {/* SVG иллюстрация */}
        <img src={Error404Svg} alt='Ошибка 404 - Страница не найдена' />

        {/* Текстовый блок */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>Страница не найдена</h2>
          <p className={styles.description}>
            К сожалению, эта страница недоступна. Вернитесь на главную страницу
            или попробуйте позже
          </p>
        </div>

        {/* Блок с кнопками */}
        <div className={styles.buttons}>
          <Button width={218} onClick={handleReportError}>
            Сообщить об ошибке
          </Button>
          <Button width={218} fill onClick={handleGoToMain}>
            На главную
          </Button>
        </div>
      </main>

      {/* Подвал */}
      <FooterUI />
    </div>
  );
};
