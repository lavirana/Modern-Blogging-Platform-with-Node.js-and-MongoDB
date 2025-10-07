const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next(); // no cookie — move on
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {
      console.error("Invalid token:", error.message);
      // optionally clear invalid cookie
      res.clearCookie(cookieName);
    }

    return next(); // continue only once
  };
}

module.exports = { checkForAuthenticationCookie };
