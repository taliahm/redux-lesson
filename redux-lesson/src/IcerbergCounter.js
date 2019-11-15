import React from 'react';
import { connect } from 'react-redux';

import { increaseIcebergCount, decreaseIcebergCount } from './connect/actions';


function IcebergCounter(props) {
  const handleIncrement = () => {
    props.dispatch(increaseIcebergCount());
  }
  const handleDecrease = () => {
    props.dispatch(decreaseIcebergCount());
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

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps, null)(IcebergCounter);