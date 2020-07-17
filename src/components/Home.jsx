import React from 'react';
import { LoginContext } from '../store/LoginContext';
import keys from '../config';

export default function Home() {
  const { state, dispatch } = React.useContext(LoginContext);

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

  return <div>Hello {name}</div>;
}
