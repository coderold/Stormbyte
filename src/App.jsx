import { AdBanner, AdsterraAd, Navbar, WeatherCard }from './Components'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//pl27194320.profitableratecpm.com/1a/c1/f9/1ac1f97156bd135e605d481319594e5b.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional: remove script on unmount
      document.body.removeChild(script);
    };
  }, []);
  

  return (
    <>
    <Navbar/>
    <div className='min-h-screen bg-bgLight dark:bg-bgdDark flex flex-col     
      align-top items-center gap-4 transition-all ease-in-out'>
        <WeatherCard/>
    </div>
    <AdBanner/>
    </>
    
  )
}

export default App
