import { useState,createContext } from 'react'
import './App.css'
import ChildA from './Components/ChildA.jsx'
//step1:create context
// const UserContext=createContext();
//step2:wrap all child inside the provider
//step3:pass value
//step4:consume
const ThemeContext=createContext();

function App() {
 
  // const [user,setUser]=useState({name:'soms'})
  const [theme,setTheme]=useState('light');

  return (
    <>
      {/* <UserContext.Provider value={user} >
      <ChildA/>
      </UserContext.Provider> */}
      <ThemeContext.Provider value={{theme,setTheme}} >
        <div className='container' style={{backgroundColor:theme==='light' ? 'beige' : 'black' }} >
        <ChildA/>
        </div>
        
      </ThemeContext.Provider>
    </>
  )
}

export default App
export {ThemeContext}
// export {UserContext}
