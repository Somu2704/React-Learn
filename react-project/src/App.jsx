// import UserCard from './Components/UserCard';
// import messi1 from './assets/messi1.jpg'
// import messi2 from './assets/messi2.jpg'
// import messi3 from './assets/messi3.jpg'
import Counter from './Components/Counter.jsx'
import {useState} from 'react'


import './App.css'

function App() {
  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
    {/* <div className='container'  >
      <UserCard name="Suprit" desc="desc1" image={messi1}  style={{"border-radius":"10px"}}  />
      <UserCard name="SOms" desc="desc2" image={messi2} style={{"border-radius":"10px"}}/>
      <UserCard name="Somu" desc="desc2" image={messi3} style={{"border-radius":"10px"}} />
    </div> */}
    <Counter handleClick={handleClick} count={count}  >
      hallo isch bin som

    </Counter>
    
    </>
      
  );
}

export default App
