import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

const getLoginState = (req) => {
    return {
        returnTo: req.headers.referer
    };
  };

export default handleAuth({
    async logout(req, res) {
        let returnTo;
        const referer = req.headers.referer;
        if (referer.includes('browse')) {
            returnTo = '/browse'
        } else {
            returnTo = '/'
        }
        try {
            await handleLogout(req, res, { returnTo });
        } catch (err) {
            res.status(err.status ?? 500).end(err.message)
        }
    },  
    async login(req, res) {
        try {
            await handleLogin(req, res, { getLoginState });
        } catch (err) {
            res.status(err.status ?? 500).end(err.message)
        }
      },
  });