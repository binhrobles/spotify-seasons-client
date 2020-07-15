const keys = Object.freeze({
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  scope: 'user-read-private user-read-email',
});

export default keys;
