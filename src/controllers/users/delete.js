const { User } = require("../../model/user");

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (user) return res.send(user);
    return res.status(404).send({ error: "User not found" });
  } catch (err) {
    return res.send(err);
  }
};

module.exports = deleteUser;
