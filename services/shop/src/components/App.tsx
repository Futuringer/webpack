import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <h1>SHOP_SERVICE2</h1>
      <Outlet />
    </div>
  );
};
  