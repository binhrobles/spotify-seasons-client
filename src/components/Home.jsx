import React, { useContext } from 'react';
import { LoginContext } from '../store/LoginContext';

export default function Home() {
  const { state, dispatch } = useContext(LoginContext);

  if (!state.isLoggedIn) {
    return <div>Not logged in</div>;
  }

  const { avatar_url, name, public_repos, followers, following } = state.user;

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  return <div>Hello {name}</div>;
}
