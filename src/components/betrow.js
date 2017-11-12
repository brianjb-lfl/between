import React from 'react';
import {connect} from 'react-redux';
import './betrow.css';

export function BetRow (props) {
  return (
    <div id="betrow-wrapper">
      <h3>Bet:  {props.bet.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
      }).slice(0, -3)}</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  bet: state.bet
});

export default connect(mapStateToProps)(BetRow);