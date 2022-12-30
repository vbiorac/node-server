import { ironSession } from 'iron-session/express';

const session = ironSession({
  cookieName: 'flaschenpost-webserver-iron-session-express',
  password: 'b8zJrb3PBmLVChkMXcWKmoJW4pDfmfueq',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    httpOnly: false,
  },
});

export default session;
