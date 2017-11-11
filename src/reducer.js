'use strict';

const initialState = {
  appState: 'start',
};

export default (state, action) => {
  state = state || initialState;
  return state;
};