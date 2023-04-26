import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: 'http://localhost:3000',
      scope: 'openid profile email',
    }
  })
});