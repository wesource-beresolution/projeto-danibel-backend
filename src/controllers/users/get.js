const { User } = require("../../model/user");
const { findUserID } = require("./utils/findUserID");

const getUser = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const { response, status } = await findUserID(User, id);
    return res.status(status).send(response);
  }

  const user = await User.find();
  return res.send(user);
};

module.exports = getUser;
