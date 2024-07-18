import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
  },
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
