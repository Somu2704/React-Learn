import React from 'react'
// import { UserContext } from '../App'
import { useContext } from 'react'
import { ThemeContext } from '../App';

const ChildD = () => {
    // const user=useContext(UserContext);
    const {theme,setTheme }=useContext(ThemeContext);
    function handleClick(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
    <div>
        {/* data: {user.name} */}
        <button onClick={handleClick} >
            toggle
        </button>
    </div>
  )
}

export default ChildD