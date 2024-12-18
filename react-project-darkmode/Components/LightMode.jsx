import React from 'react'

const LightMode = () => {
    function handleClick(){
        let bodyStyle=document.body.style;
        if(bodyStyle.backgroundColor==='black'){
            bodyStyle.backgroundColor='white';
        }
        else{
            bodyStyle.backgroundColor='black'
        }
    }


  return (
    <div>
        <button onClick={handleClick}>toggle darkmode</button>
    </div>
  )
}

export default LightMode