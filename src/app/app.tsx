import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './app.css';
import { SkillCard } from '../widgets/skill-card/skill-card';

function App() {
  const [count, setCount] = useState(0);
  const [isLike, setLike] = useState(false);

  const user = {
    avatar: 'src/stories/assets/avatar_victoria.png',
    name: 'Виктория',
    city: 'Кемерово',
    age: 30
  };

  const canTeach = ['JavaScript', 'React', 'TypeScript'];
  const wantsToLearn = ['GraphQL', 'Node.js', 'Docker', 'AWS'];

  const handleLikeToggle = () => {
    setLike(!isLike);
    // Здесь может быть логика для обновления состояния лайка
  };

  // Обработчик для кнопки "Подробнее"
  const handleDetailsClick = () => {
    console.log("Кнопка 'Подробнее' нажата");
    // Здесь может быть навигация или открытие модального окна
  };

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <SkillCard
          user={user}
          canTeach={canTeach}
          wantsToLearn={wantsToLearn}
          onLikeToggle={handleLikeToggle}
          isLiked={false} // или true, если лайк уже поставлен
          onDetailsClick={handleDetailsClick}
        />

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
