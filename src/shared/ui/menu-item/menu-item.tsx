import RequestIcon from './icons/request.svg';
import MessageTextIcon from './icons/message-text.svg';
import LikeIcon from './icons/like.svg';
import IdeaIcon from './icons/idea.svg';
import UserIcon from './icons/user.svg';
import styles from './menu-item.module.css';

export interface MenuItemProps {
  /**
   * Тип пункта меню, определяет иконку и текст
   */
  type: 'requests' | 'exchanges' | 'favorites' | 'skills' | 'profile';
  /**
   * Активен ли пункт меню
   */
  active?: boolean;
  /**
   * Обработчик клика
   */
  onClick?: () => void;
}

/**
 * Компонент пункта меню профиля
 * @param type - тип пункта меню
 * @param active - активен ли пункт
 * @param onClick - обработчик клика
 */
export const MenuItem = ({ type, active = false, onClick }: MenuItemProps) => {
  // Определяем иконку и текст в зависимости от типа
  const { icon, text } = {
    requests: { icon: RequestIcon, text: 'Заявки' },
    exchanges: { icon: MessageTextIcon, text: 'Мои обмены' },
    favorites: { icon: LikeIcon, text: 'Избранное' },
    skills: { icon: IdeaIcon, text: 'Мои навыки' },
    profile: { icon: UserIcon, text: 'Личные данные' }
  }[type];

  return (
    <button
      className={`${styles.menuItem} ${active ? styles.active : ''}`}
      onClick={onClick}
      type='button'
    >
      <div className={styles.icon}>
        <img src={icon} alt={text} />
      </div>
      <span className={styles.text}>{text}</span>
    </button>
  );
};
