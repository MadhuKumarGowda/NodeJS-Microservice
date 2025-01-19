import jwt from "jsonwebtoken";

const authMiddleWare = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  if (authHeader === null || authHeader === undefined) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  const token = authHeader.split(" ")[1];

  // Verify Token
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ message: "Unauthorized." });

    req.user = payload;
    next();
  });
};

export default authMiddleWare;
