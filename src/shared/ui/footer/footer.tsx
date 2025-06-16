import type { FC } from 'react';
import { LogoUI } from '../logo';
import styles from './footer.module.css';

/**
 * Компонент Footer - подвал сайта с 4 блоками по 324px
 */
export const FooterUI: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.blocksContainer}>
      {/* Первый блок - логотип и копирайт */}
      <div className={styles.block}>
        <div className={styles.logoSection}>
          <LogoUI />
        </div>
        <div className={styles.copyrightSection}>
          <p className={styles.copyrightText}>SkillSwap &mdash; 2025</p>
        </div>
      </div>

      {/* Второй блок - О проекте, Все навыки */}
      <div className={styles.block}>
        <div className={styles.linkListCenter}>
          <ul className={styles.linkList}>
            <li>
              {/* TODO: Заменить на реальные ссылки */}
              <a href='#' className={styles.link}>
                О проекте
              </a>
            </li>
            <li>
              {/* TODO: Заменить на реальные ссылки */}
              <a href='#' className={styles.link}>
                Все навыки
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Третий блок - Контакты, Блог */}
      <div className={styles.block}>
        <div className={styles.linkListCenter}>
          <ul className={styles.linkList}>
            <li>
              {/* TODO: Заменить на реальные ссылки */}
              <a href='#' className={styles.link}>
                Контакты
              </a>
            </li>
            <li>
              {/* TODO: Заменить на реальные ссылки */}
              <a href='#' className={styles.link}>
                Блог
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Четвертый блок - Политика конфиденциальности, Пользовательское соглашение */}
      <div className={styles.block}>
        <div className={styles.linkListCenter}>
          <ul className={styles.linkList}>
            <li>
              {/* TODO: Заменить на реальные ссылки */}
              <a href='#' className={styles.link}>
                Политика конфиденциальности
              </a>
            </li>
            <li>
              {/* TODO: Заменить на реальные ссылки */}
              <a href='#' className={styles.link}>
                Пользовательское соглашение
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
