import { useEffect, useState } from "react"
import Background from "./components/Background/Background.jsx";
import  Navbar  from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import './index.css'
import ThanksPage from './components/Navbar/thankspage.jsx'
export const Homepage = () => {
  let heroData = [
    {text1:'Dive into',text2:'what you love'},
    {text1:'Indulge',text2:'your passions'},
    {text1:'Give in to ',text2:'your passions'}, 

  ]
  const [heroCount,setHeroCount]=useState(0);
  const [playStatus,setPlayStatus]=useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
  
    return () => clearInterval(interval); // Cleanup on unmount.
  }, []);
  

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>

      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default Homepage
