import type { Skill } from '../../entities/skill/model';
import styles from './styles.module.css';

export const SkillInfo = ({ skill }: { skill: Skill }) => (
  <div className={styles.info}>
    <h2>{skill.title}</h2>
    <div className={styles.details}>
      <p><strong>Категория:</strong> {skill.category}</p>
      <p><strong>Описание:</strong> {skill.description}</p>
      <p><strong>Автор:</strong> {skill.user.name}</p> {/* Изменено с author на user */}
      {skill.user.city && <p><strong>Город:</strong> {skill.user.city}</p>} {/* Изменено с author на user */}
      {skill.user.age && (
        <p>
          <strong>Возраст:</strong> {typeof skill.user.age === 'number' ? skill.user.age : parseInt(skill.user.age) || ''}
        </p> /* Добавлена проверка типа */
      )}
    </div>
  </div>
);