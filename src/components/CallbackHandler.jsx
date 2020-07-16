import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { LoginContext } from '../store/LoginContext';
import keys from '../config';

export default function CallbackHandler() {
  const { state, dispatch } = React.useContext(LoginContext);
  const location = useLocation();

  // listen for auth code callback from spotify
  React.useEffect(() => {
    if (location.search) {
      (async () => {
        const params = queryString.parse(location.search);
        if (params.code) {
          const response = await axios.post(`${keys.backendUrl}/user`, {
            code: params.code,
          });
          console.log(response);
        }
      })();
    }
  }, [location]);

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
    });
  };

  return <div>Logging you in...</div>;
}
