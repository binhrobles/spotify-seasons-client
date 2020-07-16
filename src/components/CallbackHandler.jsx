import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { LoginContext } from '../store/LoginContext';
import keys from '../config';

export default function Home() {
  const { state, dispatch } = React.useContext(LoginContext);
  const location = useLocation();

  // listen for auth code callback from spotify
  // TODO: move this into another component?
  React.useEffect(() => {
    if (location.search) {
      const params = queryString.parse(location.search);
      if (params.code) {
        console.log(`time to ship this to the server ${params.code}`);
      }
    }
  }, [location]);

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
    });
  };

  return <div>Logging you in...</div>;
}
