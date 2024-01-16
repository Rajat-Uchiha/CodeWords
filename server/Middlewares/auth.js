import jwt from "jsonwebtoken";

const SRCT_SIGN = "@codeWords$4800H";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, SRCT_SIGN, (err) => {
      if (err) {
        return res.sendStatus(401);
      }

      next();
    });
  } else {
    return res.sendStatus(403);
  }
};

export default verifyToken;
