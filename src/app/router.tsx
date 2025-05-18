// import { createBrowserRouter } from 'react-router-dom';
// import { WaterTaskPage } from '../pages/WaterTaskPage/WaterTaskPage';
// import { BalanceTaskPage } from '../pages/BalanceTaskPage/BalanceTaskPage';
// import { HomePage } from '../pages/Home/HomePage';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
//    {
//     path: '/water-task',
//     element: <WaterTaskPage />,
//   },
//   {
//     path: '/balance-task',
//     element: <BalanceTaskPage />,
//   },
// ]);

// router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { WaterTaskPage } from '../pages/WaterTaskPage/WaterTaskPage';
import { BalanceTaskPage } from '../pages/BalanceTaskPage/BalanceTaskPage';
import { Layout } from './layout/Layout';

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/water-task',
          element: <WaterTaskPage />
        },
        {
          path: '/balance-task',
          element: <BalanceTaskPage />
        },
        {
          path: '*',
          element: <div>404 Not Found</div>
        },
      ]
    }
  ],
  {
    basename: '/BrainGames/' 
  }
);
