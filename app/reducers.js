export function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'SET_INIT_COUNT':
      return action.count;
    default:
      return state;
  }
}
