
import React from 'react';


function IcebergCounter(props) {
  const handleIncrement = () => {

  }
  const handleDecrease = () => {

  }
  return (
    <>
      <h1>How many icebergs have you seen?</h1>
      <h4>{props.count}</h4>
      <button onClick={handleIncrement}>Just saw one!</button>
      <button onClick={handleDecrease}>Just kidding!</button>
    </>
  )
}

//mapStateToProps goes here

export default IcebergCounter;