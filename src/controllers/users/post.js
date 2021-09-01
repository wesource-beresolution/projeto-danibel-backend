const { User } = require("../../model/user");

const postUser = async (req, res) => {
  const { email } = req.body;

  try {
    const findUser = await User.findOne({ email });

    if (findUser)
      return res.status(422).send({ error: "User already exists!" });

    const user = await User.create(req.body);
    return res.status(200).send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed", err });
  }
};

module.exports = postUser;
