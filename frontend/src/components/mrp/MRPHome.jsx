import React, {useEffect} from 'react'
import CuriosityRoverHero from './CuriosityRoverHero'
import CuriosityModel from './CuriosityModel'
import FeaturedVideo from './FeaturedVideo'
import MRPMini from './MRPMini'
import { useNavigate } from 'react-router-dom'

export default function MRPHome() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const navigate = useNavigate();
  const isLoggedinFrom = localStorage.getItem('isLoggedin');
  useEffect(() => {
    const isLoggedinFromLocalStorage = localStorage.getItem('isLoggedin');
    if (isLoggedinFromLocalStorage === true || isLoggedinFromLocalStorage === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (!isLoggedIn) {
    window.location.pathname = '/sign-in';
  }
  return (
    <div>
      <CuriosityRoverHero />
      <CuriosityModel />
      <FeaturedVideo />
      <MRPMini/>
    </div>
  )
}
