import { useState } from 'react';
import styles from './profile-page.module.css';
// import { AppHeaderUI } from '../../shared/ui/app-header';
// import { FooterUI } from '../../shared/ui/footer';
import { MenuItem } from '../../shared/ui/menu-item';
import { EditableField } from '../../shared/ui/editable-field';
import { DropDownDateBirthday } from '../../shared/ui/dropdown-date-birthday';
import { CheckboxDropdown } from '../../shared/ui/checkbox-dropdown';
import { Button } from '../../shared/ui/button';
import { UserAvatarUI } from '../../shared/ui/user-avatar';
import { USER_AVATAR_SIZE } from '../../shared/lib/constants';
import { CITIES, GENDER } from '../../shared/ui/checkbox-dropdown/constants';

type MenuItemType =
  | 'requests'
  | 'exchanges'
  | 'favorites'
  | 'skills'
  | 'profile';

/**
 * Страница профиля пользователя
 */
export const ProfilePage = () => {
  // Состояние активного пункта меню
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItemType>('profile');

  // Данные пользователя
  const [userData, setUserData] = useState({
    email: 'Mariia@gmail.com',
    name: 'Мария',
    birthDate: new Date(1995, 9, 28), // 28.10.1995
    gender: 'Женский',
    city: 'Москва',
    about:
      'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме.\nВсегда готова пообщаться и обменяться чем‑то интересным!'
  });

  // Обработчик изменения данных
  const handleChange = (field: string, value: string | Date | string[]) => {
    setUserData((prev) => ({
      ...prev,
      [field]: Array.isArray(value) ? value[0] : value
    }));
  };

  // Обработчик загрузки аватара
  const handleAvatarUpload = (files: File[]) => {
    console.log('Загружен новый аватар:', files[0]);
    // логика загрузки на сервер
  };

  return (
    <div className={styles.pageContainer}>
      {/* <AppHeaderUI isAuth={false} /> */}

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {/* Боковое меню */}
          <div className={styles.sidebar}>
            <div className={styles.menuContainer}>
              <MenuItem
                type='requests'
                active={activeMenuItem === 'requests'}
                onClick={() => setActiveMenuItem('requests')}
              />
              <MenuItem
                type='exchanges'
                active={activeMenuItem === 'exchanges'}
                onClick={() => setActiveMenuItem('exchanges')}
              />
              <MenuItem
                type='favorites'
                active={activeMenuItem === 'favorites'}
                onClick={() => setActiveMenuItem('favorites')}
              />
              <MenuItem
                type='skills'
                active={activeMenuItem === 'skills'}
                onClick={() => setActiveMenuItem('skills')}
              />
              <MenuItem
                type='profile'
                active={activeMenuItem === 'profile'}
                onClick={() => setActiveMenuItem('profile')}
              />
            </div>
          </div>

          {/* Основное содержимое - форма профиля */}
          <div className={styles.profileContent}>
            <div className={styles.mainContent}>
              <form className={styles.profileForm}>
                <div className={styles.formFields}>
                  <EditableField
                    label='Почта'
                    initialValue={userData.email}
                    onSave={(value) => handleChange('email', value)}
                  />

                  <EditableField
                    label='Имя'
                    initialValue={userData.name}
                    onSave={(value) => handleChange('name', value)}
                  />

                  <div className={styles.rowFields}>
                    <div className={styles.dateField}>
                      <DropDownDateBirthday
                        value={userData.birthDate}
                        onChange={(date) =>
                          date && handleChange('birthDate', date)
                        }
                      />
                    </div>

                    <div className={styles.genderField}>
                      <CheckboxDropdown
                        label='Пол'
                        options={GENDER}
                        selected={[userData.gender]}
                        onChange={(values) => handleChange('gender', values)}
                        multiselect={false}
                        placeholder={userData.gender}
                        className={styles.customDropdown}
                        inputClassName={styles.dropdownInput}
                      />
                    </div>
                  </div>

                  <CheckboxDropdown
                    label='Город'
                    options={CITIES}
                    selected={userData.city ? [userData.city] : []}
                    onChange={(values) => handleChange('city', values[0] || '')}
                    multiselect={false}
                    placeholder={userData.city}
                    className={styles.customDropdown}
                    inputClassName={styles.dropdownInput}
                  />

                  <EditableField
                    label='О себе'
                    initialValue={userData.about}
                    onSave={(value) => handleChange('about', value)}
                    multiline
                    rows={4}
                  />
                </div>

                <Button className={styles.saveButton} fill disabled>
                  Сохранить
                </Button>
              </form>
            </div>

            {/* Блок с аватаром */}
            <div className={styles.avatarSection}>
              <div className={styles.avatarContainer}>
                <UserAvatarUI
                  src='/src/stories/assets/avatar_maria.png'
                  size={USER_AVATAR_SIZE.LARGE}
                />
                <div className={styles.avatarEditButton}>
                  {' '}
                  <img
                    src='/src/pages/profile-page/gallery-edit.svg'
                    alt='Редактировать аватар'
                    className={styles.editIcon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <FooterUI /> */}
    </div>
  );
};
