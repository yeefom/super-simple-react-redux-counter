import React, {PropTypes} from 'react';

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  setInitCount: PropTypes.func.isRequired
};

export default function Counter(props) {
  return (
    <div>
      <input
        onChange={props.setInitCount}
        value={props.count}
      />
      count: {props.count}
      <button onClick={props.handleClick}>
        increase
      </button>
    </div>
  );
}
