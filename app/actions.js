export function setInitCount(count) {
  return {
    type: 'SET_INIT_COUNT',
    count
  };
}

export function increase() {
  return {
    type: 'INCREASE'
  };
}
