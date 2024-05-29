import jwt from "jsonwebtoken";

const secret = "jwt_secret_key"; 

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
    console.log(token)
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export const generateToken = (user) => {
  return jwt.sign(user, secret, { expiresIn: "12h" });
};
