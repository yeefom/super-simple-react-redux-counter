import React, {PropTypes} from 'react';

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default function Counter({count, handleClick}) {
  return (
    <div>
      count: {count}
      <button onClick={handleClick}>
        increase
      </button>
    </div>
  );
}
