import { Route, Routes, useLocation } from 'react-router-dom';
import { AppHeaderUI, FooterUI } from '../shared/ui';
import styles from './app.module.css';
import { CatalogPage, FavoritesPage, LoginPage } from '../pages';
import { useAppState } from '../entities/app-state-context/useAppState';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const { state, dispatch } = useAppState();

  return (
    <div className={styles.app}>
      <AppHeaderUI
        isAuth={state.isAuth}
        userAvatarUrl={state.currentUser?.avatar}
        userName={state.currentUser?.name}
      />
      <Routes location={background || location}>
        <Route path='/' element={<CatalogPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/registration' />
      </Routes>
      <FooterUI />
    </div>
  );
}

export default App;
