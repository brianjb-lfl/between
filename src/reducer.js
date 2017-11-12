'use strict';
import * as actions from './actions';

const initialState = {
  appState: 'start',
  pot: 4500,
  stack: 500,
  bet: 0,
  anteAmt: 25,
};

export const reducer = (state=initialState, action) => {
  if(action.type === 'START_GAME') {
    state = Object.assign( {}, state, {
      appState: 'preAnte'
    });
    return state;
  }

  if(action.type === 'ANTE_UP') {
    state = Object.assign( {}, state, {
      bet: state.anteAmt, 
      stack: state.stack - state.anteAmt,
      appState: 'bet'
    })
  }

  if(action.type === 'PLACE_BET') {
    state = Object.assign( {}, state, {
      bet: state.bet + action.bet, 
      stack: state.stack - action.bet,
      appState: 'preReveal'
    })
  }

  return state;
}