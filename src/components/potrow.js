import React from 'react';
import {connect} from 'react-redux';
import './potrow.css';

export function PotRow (props) {
  return (
    <div id="potrow-wrapper">
      <h3>Pot:  {props.pot.toLocaleString('en', {
        style: 'currency', 
        currency: 'USD'
      }).slice(0, -3)}</h3>    
    </div>
  );
};

const mapStateToProps = state => ({
  pot: state.pot
});

export default connect(mapStateToProps)(PotRow);