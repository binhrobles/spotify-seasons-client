import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { LoginContext } from '../store/LoginContext';
import keys from '../config';

export default function Home() {
  const { state, dispatch } = React.useContext(LoginContext);
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();

  // listen for auth code callback from spotify
  React.useEffect(() => {
    if (location.search) {
      setLoading(true);
      (async () => {
        const params = queryString.parse(location.search);
        if (params.code) {
          // use backend to trade Spotify auth code for access token
          const response = await axios.put(`${keys.backendUrl}/user`, {
            code: params.code,
          });
          console.log(response);
          setLoading(false);
        }
      })();
    }
  }, [location]);

  if (!state.isLoggedIn) {
    return (
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${
          keys.clientId
        }&response_type=code&redirect_uri=${encodeURIComponent(
          keys.redirectUri
        )}&scope=${keys.scope}`}
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

  if (loading) {
    return <div>Logging in...</div>;
  }

  return <div>Hello {name}</div>;
}
