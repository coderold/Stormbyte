import React from 'react'
import { useState } from 'react'

function Navbar() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light'? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

  return (
    <div>
      <nav className='bg-primary/50 text-textLight dark:text-textDark px-4 py-3 shadow-md'>
        <div className='flex justify-between'>
            <h3>
                🌤️Stormbyte
            </h3>
            <button className='bg-secondary text-textLight  dark:bg-secondaryDark  dark:text-textDark
                                    px-6 rounded-2xl text-textMd hover:bg-accent'
              onClick={toggleTheme}>
        {theme === 'light'? '☀️' : '🌙'}
        </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
