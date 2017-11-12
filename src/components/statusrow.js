import React from 'react';
import {connect} from 'react-redux';
import './statusrow.css';

export function StatusRow (props) {
  const statStrings = {
    start:    <h3>
                Ready to play?
              </h3>,
    preAnte:  <h3>
                Ante = {props.anteAmt.toLocaleString('en', {
                  style: 'currency', 
                  currency: 'USD'
                }).slice(0, -3)}
              </h3>,
    bet:      <h3>
                Place your bet
              </h3>
  }
  
  return (
    <div id="statusrow-wrapper">
      {statStrings[props.appState]}
    </div>
  );
};

const mapStateToProps = state => ({
  appState: state.appState,
  anteAmt: state.anteAmt,
});

export default connect(mapStateToProps)(StatusRow);