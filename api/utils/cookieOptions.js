const isProduction = process.env.NODE_ENV === 'production';

export const cookieOptions = {
  httpOnly: true,
  sameSite: isProduction ? 'none' : 'lax',
  secure: isProduction,
};
