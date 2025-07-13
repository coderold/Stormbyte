import { useState } from 'react'
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
    // <div className="min-h-screen bg-gradient-to-tr from-pink-500 to-yellow-300 flex flex-col items-center justify-center gap-4">
    //   <h1 className="text-5xl font-bold text-white">🌤️ Tailwind Works!</h1>
    //   <p className="text-lg text-white bg-gray-600 bg-opacity-40 hover:bg-amber-200 px-4 py-2 rounded-xl shadow-lg">
    //     If you see this colorful screen, you're good to go!
    //   </p>

    //   <p className="text-2xl text-amber-50 bg px-4 rounded-2xl shadow-lg">
    //     Burat puke tite bulbol
    //   </p>
    // </div>

    <div className='min-h-screen dark:bg-bgdDark flex flex-col justify-center items-center gap-4 transition-all ease-in-out'>
      <h2 className='text-textLight bg-primary/40 px-4 rounded-2xl'>
        🌤️Stormbyte
      </h2>

      <button className='bg-secondary px-6 rounded-2xl text-textLight text-textMd hover:bg-accent'
              onClick={toggleTheme}>
        {theme === 'light'? 'LightMode' : 'DarkMode'}
        </button>
    </div>
  )
}

export default App
