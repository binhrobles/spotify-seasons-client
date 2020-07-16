import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CallbackHandler from './components/CallbackHandler';
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
        <Switch>
          <Route path="/callback" component={CallbackHandler} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
