import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import styles from './server-error-500.module.css';
import { AppHeaderUI } from '../../shared/ui/app-header';
import { FooterUI } from '../../shared/ui/footer';
import { Button } from '../../shared/ui/button';
import Error500Svg from './error-500.svg';

export const ServerError500Page: FC = () => {
  const navigate = useNavigate();

  const handleGoToMain = () => {
    navigate('/');
  };

  const handleReportError = () => {
    console.log('Сообщение об ошибке отправлено');
  };

  return (
    <div className={styles.page}>
      <AppHeaderUI isAuth={false} isCompact={false} />

      <main className={styles.content}>
        <img src={Error500Svg} alt='Ошибка 500 - Серверная ошибка' />

        <div className={styles.textBlock}>
          <h2 className={styles.heading}>На сервере произошла ошибка</h2>
          <p className={styles.description}>
            Попробуйте позже или вернитесь на главную страницу
          </p>
        </div>

        <div className={styles.buttons}>
          <Button width={218} onClick={handleReportError}>
            Сообщить об ошибке
          </Button>
          <Button width={218} fill onClick={handleGoToMain}>
            На главную
          </Button>
        </div>
      </main>

      <FooterUI />
    </div>
  );
};
