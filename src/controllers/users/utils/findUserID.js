const findUserID = async (model, id) => {
  const user = await model.findById(id);

  if (user) return { response: user, status: 200 };

  return { response: { error: "User not found" }, status: 422 };
};
module.exports = { findUserID };
