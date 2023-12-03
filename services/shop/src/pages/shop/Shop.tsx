
import {shopRoutes} from '@packages/shared/src/routes/shop';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <h1>
      Shop
      <Link to={shopRoutes.second}>second-page</Link>
    </h1>
  );
};

export default Shop;