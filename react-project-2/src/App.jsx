import { useState } from 'react'
import LoginBtn from './components/LoginBtn.jsx'
import LogOutBtn from './components/LogOutBtn.jsx'


import './App.css'
import Card from './components/Card.jsx'
function App() {
  // const [name, setName] = useState('')
  const [isLoggedIn,setisLoggedIn]=useState(false);

  return(
    isLoggedIn ? <LogOutBtn/> : <LoginBtn/>
  )

  // if(isLoggedIn){
  //   return(
  //     <LogOutBtn/>
  //   );
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
    
     {/* <div>
      <Card name={name} setName={setName} >
      </Card>

      <p>
          i am inside the parent componet:{name}
        </p>
     </div> */}

   
  
}

export default App
