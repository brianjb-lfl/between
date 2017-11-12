import React from 'react';
import {connect} from 'react-redux';
import './stackrow.css';

export function StackRow (props) {
  return (
    <div id="stackrow-wrapper">
      <h3>Stack:  {props.stack.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
      }).slice(0,-3)}</h3>
    </div>  
  );
};

const mapStateToProps = state => ({
  stack: state.stack
});

export default connect(mapStateToProps)(StackRow);

// return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")