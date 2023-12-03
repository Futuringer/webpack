import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {adminRoutes} from '@packages/shared/src/routes/admin';
import {shopRoutes} from '@packages/shared/src/routes/shop';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <h1>PLATFORM</h1>
      <Link to={adminRoutes.admin}>Admin</Link>
      <br />
      <Link to={shopRoutes.main}>Shop</Link>
      <Outlet />
    </div>
  );
};
  