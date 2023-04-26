import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: process.env.LIFF_API_BASE_URL,
      scope: 'openid profile email',
    }
  })
});