import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import shapePng from '@/assets/Shape.png';
import shapeJpg from '@/assets/Shape.jpg';
import ShapeSvg from '@/assets/Shape.svg';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(prev => prev + 1);

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>IS DESKTOP PLATFORM</div>
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <div>IS MOBILE PLATFORM</div>
  // }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <img width={100} height={100} src={shapePng} alt="" />
      <img width={100} height={100} src={shapeJpg} alt="" />
      <ShapeSvg fill={'red'} style={{color:'blue'}}/>
      <Link to='/about'>about</Link>
      <br />
      <Link to='/shop'>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button onClick={increment} className={classes.button}>inc</button>
      <Outlet />
    </div>
  );
};
  