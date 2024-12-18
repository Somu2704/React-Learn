import React from 'react'

const ChildComponent = React.memo((props) => {

    console.log("child component got re-rendered");

  return (
    <div>
        <button onClick={props.handleClick} >
            {props.buttonName}
        </button>
    </div>
  )
}
);

export default ChildComponent

//React.memo wraps the component renders it only when the value in component is changed
//if u want to send the function it will re-render again and again