import React from 'react';

import Title from './title';
import PotRow from './potrow';
import CardRow from './cardrow';
import BetRow from './betrow';
import UIRow from './uirow';
import StackRow from './stackrow';
import StatusRow from './statusrow';

import './board.css';

export default function Board(props) {
  return (
    <div id="board-wrapper">
      <Title />
      <PotRow />
      <CardRow />
      <BetRow />
      <UIRow />
      <StackRow />
      <StatusRow />
    </div>
  );
};