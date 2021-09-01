const { User } = require("../../model/user");
const { findUserID } = require("./utils/findUserID");

const putUser = async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  const { response, status } = await findUserID(User, id);

  if (response) return res.status(status).send(response);

  const emailAlreadyExists = await User.findOne({ email });
  const { _id } = emailAlreadyExists;

  if (emailAlreadyExists && _id !== id)
    return res.status(200).send({ error: "Email already exists" });

  await User.findByIdAndUpdate(id, { ...req.body });
  return res.send({ message: "Data successfully changed" });
};

module.exports = putUser;
