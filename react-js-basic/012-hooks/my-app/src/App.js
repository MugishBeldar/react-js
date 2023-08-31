import React, { useReducer } from 'react';
import './App.css';
import FirstHook from './components/FirstHook';
import FourthHook from './components/FourthHook';
import SecondHook from './components/SecondHook';
import ThirdHook from './components/ThirdHook';
import FirstUseefect from './components/useEffect/FirstUseefect';
import RuneffectOnlyOnce from './components/useEffect/RuneffectOnlyOnce';
import CounterOne from './components/useReducer/CounterOne';
import CounterOneUsingOnject from './components/useReducer/CounterOneUsingOnject';
import MultipleUseReducer from './components/useReducer/multipleUseReducer';
import ComponentA from './components/useReducerWithuseContext/ComponentA';
import ComponentB from './components/useReducerWithuseContext/ComponentB';
import ComponentC from './components/useReducerWithuseContext/ComponentC';
import ComponentD from './components/useReducerWithuseContext/ComponentD';

export const CountContext = React.createContext();
const initialState = 0; // initial state value is count value when program is run 
const reducer = (state, action) => {
  // always return new state 
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <FirstHook />
      <SecondHook />
      <ThirdHook />
      <FourthHook />
      <FirstUseefect />
      <RuneffectOnlyOnce />
      <CounterOne />
      <CounterOneUsingOnject />
      <MultipleUseReducer />

      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>

      {/* <ComponentD /> */}
    </div>
  );
}

export default App;
