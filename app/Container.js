import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions';
import Counter from './Component';

class Container extends Component {
  render() {
    return (
      <Counter
        count={this.props.count}
        handleClick={this.props.increase}
        setInitCount={e => this.props.setInitCount(+e.target.value)}
      />
    );
  }
}

Container.propTypes = {
  count: PropTypes.number.isRequired
};

function mapStateToProps({counter}) {
  return {
    count: counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
