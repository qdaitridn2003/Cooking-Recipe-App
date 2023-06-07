import { useEffect, useState } from 'react'
import MainNavigation from '../navigations/MainNavigation'
import SplashScreen from './SplashScreen';

export default function MainScreen() {

  const [isSplash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 13150);
  })

  if (isSplash) return <SplashScreen />;

  return (
      <MainNavigation/>
  )
}