import { useSelector, useDispatch } from 'react-redux';
//import {connect} from 'react-redux';
//import {Component} from 'react';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUELY_GENERATED_IDENTIFIER, payload: 10}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  // const authHandler = () => {
  //   dispatch(authActions.toggleCounter());
  // };

      return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={incrementHandler}>increment</button>
          <button onClick={increaseHandler}>increase by 5</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
};

export default Counter;

// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();}
//   toggleCounterHandler(){}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
