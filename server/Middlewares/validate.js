const validate = (req, res, next) => {
  const { username, password } = req.body;
  console.log("Validation is going on");

  if (
    (username.length < 3 && password.length < 6) ||
    username.length === 0 ||
    password.length === 0
  ) {
    return res.status(403).json({
      message:
        "Either username is less than 3 words or password is less than 6",
    });
  }

  next();
};

export default validate;
