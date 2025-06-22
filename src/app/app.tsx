import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SkillPage } from '../pages/skill/index'; // Укажите правильный путь

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/skill/:id" element={<SkillPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Компонент для домашней страницы
function HomePage() {
  const [count, setCount] = useState(0);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
 
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppHeaderUI, FooterUI } from '../shared/ui';
import styles from './app.module.css';
import { CatalogPage, FavoritesPage } from '../pages';
import avatarUrl from "../../public/assets/avatar_michail.png";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const isAuth = true;
  const isCompact = false;

  return (
    <div className={styles.app}>
      <AppHeaderUI
        isAuth={isAuth}
        isCompact={isCompact}
        userAvatarUrl={avatarUrl}
        userName='Michail'
      />
      <Routes location={background || location}>
        <Route path='/' element={<CatalogPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
      <FooterUI />
    </div>
  );
}

export default App;
