import { Route, Routes, useLocation } from 'react-router-dom';
import { AppHeaderUI } from '../shared/ui';
import styles from './app.module.css';
import { CatalogPage } from '../pages';

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
        userAvatarUrl='src/stories/assets/avatar_michail.png'
        userName='Michail'
        bgColor='#F9FAF7'
      />
      <Routes location={background || location}>
        <Route path='/' element={<CatalogPage />} />
      </Routes>
    </div>
  );
}

export default App;
