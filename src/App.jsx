import { Navbar, WeatherCard }from './Components'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  

  return (
    <>
    <Navbar/>
    <div className='min-h-screen bg-bgLight dark:bg-bgdDark flex flex-col     
      align-top items-center gap-4 transition-all ease-in-out'>
        <WeatherCard/>
    </div>
    </>
    
  )
}

export default App
