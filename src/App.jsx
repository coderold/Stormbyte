import { useState } from 'react'
import WeatherCard from './Components'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light'? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }

  return (
    <div className='min-h-screen bg-bgLight dark:bg-bgdDark flex flex-col 
      justify-center items-center gap-4 transition-all ease-in-out'>
      <h2 className='text-textLight bg-primary/40 dark:text-textDark dark:bg-primaryDark/40 px-4 rounded-2xl'>
        🌤️Stormbyte
      </h2>

      <button className='bg-secondary text-textLight  dark:bg-secondaryDark  dark:text-textDark
      px-6 rounded-2xl text-textMd hover:bg-accent'
              onClick={toggleTheme}>
        {theme === 'light'? 'LightMode' : 'DarkMode'}
        </button>
        <WeatherCard/>
    </div>
  )
}

export default App
