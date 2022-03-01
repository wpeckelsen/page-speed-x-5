import jwt_decode from "jwt-decode";

function isTokenValid(JWT) {
  const decodedToken = jwt_decode(JWT);
  const expirationUnix = decodedToken.exp;

  const now = new Date().getTime();
  const nowInUnix = Math.round(now / 1000);

  if (expirationUnix - nowInUnix > 0) {
    return true;
  } else {
    return false;
  }
}

export default isTokenValid;
