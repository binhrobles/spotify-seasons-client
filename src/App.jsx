import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import { LoginContext, initialState, reducer } from './store/LoginContext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
        <Home />
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
