import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import HeaderTemplate from '@components/templates/HeaderTemplate.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderTemplate />,
    children: [],
  },
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
