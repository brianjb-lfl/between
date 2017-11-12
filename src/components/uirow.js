import React from 'react';
import {connect} from 'react-redux';
import './uirow.css';
import {startGame, anteUp, placeBet} from '../actions';

export class UIRow extends React.Component {
  constructor(props) {
    super(props);
  }

  clickSUD() {
    this.props.dispatch(startGame());
  }

  clickAnte() {
    this.props.dispatch(anteUp());
  }

  placeBet() {
    this.props.placeBet(this.betinput.value);
  }

  render() {
    const uiCode = {
      start:
        <button id="sud-btn" class="solo-btn" type="button" 
          onClick={ () =>this.clickSUD()}>Shuffle up and Deal!</button>,
      preAnte: 
        <button id="ante-btn" class="solo-btn" type="button" 
          onClick={ () =>this.clickAnte()}>Ante up!</button>,
      bet:
        <form id="bet-form" onSubmit={ () => this.placeBet()}>
          <input id="bet-input" type="text" placeholder="0" 
            ref={ input => this.betinput = input} />
          <button id="bet-btn" class="form-btn" type="submit">
            Place bet
          </button>
        </form>
    };
  
    return (
      <div id="uirow-wrapper">
        <div>{uiCode[this.props.appState]}</div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  appState: state.appState
});

export default connect(mapStateToProps)(UIRow);