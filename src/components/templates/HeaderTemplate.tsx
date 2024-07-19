import Header from '@components/organisms/Header.tsx';
import { Outlet } from 'react-router-dom';

const HeaderTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderTemplate;
