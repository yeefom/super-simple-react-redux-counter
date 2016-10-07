export function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREASEEE':
      return state + 1;
    default:
      return state;
  }
}
