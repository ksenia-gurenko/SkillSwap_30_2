import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './app.module.css';
import { useAppState } from '../entities/app-state-context/useAppState';
import { AppHeaderUI, FooterUI } from '../shared/ui';
import { CatalogPage, FavoritesPage, LoginPage, RegistrationPage } from '../pages';
import { SkillPage } from '../pages/skill';

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
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path="/skill/:id" element={<SkillPage />} />
      </Routes>
      <FooterUI />
    </div>
  );
}

export default App;
