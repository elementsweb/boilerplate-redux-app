import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incrementCounter } from '../actions/counter';

export const Button = ({ counter, increment }) => (
  <button onClick={() => increment()}>Click me - {counter}</button>
);

Button.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
