import { App } from "@/components/App";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import {adminRoutes} from '@packages/shared/src/routes/admin';
import {shopRoutes} from '@packages/shared/src/routes/shop';

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}><Shop/></Suspense>
      },
      {
        path: '/shop/second',
        element: <Suspense fallback={'Loading...'}><div>shop-second</div></Suspense>
      }
    ]
  },
]

export const router = createBrowserRouter(routes);

export default routes