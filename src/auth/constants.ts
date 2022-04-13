import * as fs from 'fs';

export const jwtConstants = {
  secret: fs.readFileSync("./config/jwt/public.pem", "utf8")
};
