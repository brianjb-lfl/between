export const startGame = () => ({
  type: 'START_GAME',
});

export const anteUp = () => ({
  type: 'ANTE_UP',
});

export const placeBet = (betInput) => ({
  type: 'PLACE_BET',
  bet: betInput
});