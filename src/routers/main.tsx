import { Route, Routes } from 'react-router-dom';

import { MAIN_PATHS } from '@constants/routes';
import { MainPage, NotFoundPage } from '@pages';

const Router = (): JSX.Element => (
  <Routes>
    <Route path={MAIN_PATHS.MAIN_PAGE} element={<MainPage />} />
    <Route path={MAIN_PATHS.NOTFOUND_PAGE} element={<NotFoundPage />} />
  </Routes>
);

export default Router;
