import type { Skill } from '../../entities/skill/model';
import styles from './styles.module.css';

export const SkillInfo = ({ skill }: { skill: Skill }) => (
  <div className={styles.info}>
    <h2>{skill.title}</h2>
    <div className={styles.details}>
      <p><strong>Категория:</strong> {skill.category}</p>
      <p><strong>Описание:</strong> {skill.description}</p>
      <p><strong>Автор:</strong> {skill.author.name}</p>
      {skill.author.city && <p><strong>Город:</strong> {skill.author.city}</p>}
      {skill.author.age && <p><strong>Возраст:</strong> {skill.author.age}</p>}
    </div>
  </div>
);