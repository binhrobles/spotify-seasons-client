import React, { useContext } from 'react';
import { LoginContext } from '../store/LoginContext';
import keys from '../config';

export default function Home() {
  const { state, dispatch } = useContext(LoginContext);

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

  const { avatar_url, name, public_repos, followers, following } = state.user;

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
