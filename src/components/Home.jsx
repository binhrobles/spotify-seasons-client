import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { LoginContext } from '../store/LoginContext';
import keys from '../config';

export default function Home() {
  const { state, dispatch } = React.useContext(LoginContext);
  const location = useLocation();

  React.useEffect(() => {
    if (location.search) {
      const params = queryString.parse(location.search);
      if (params.code) {
        console.log(`time to ship this to the server ${params.code}`);
      }
    }
  }, [location]);

  if (!state.isLoggedIn) {
    return (
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${keys.clientId}&response_type=code&redirect_uri=${keys.redirectUri}&scope=${keys.scope}`}
        onClick={() => {}}
      >
        <span>Authorize with Spotify</span>
      </a>
    );
  }

  const { name } = state.user;

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
    });
  };

  return <div>Hello {name}</div>;
}
