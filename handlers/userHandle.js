//requerimos el modelo de la base de datos para realizar las 
//operaciones de crud
const User = require("./../db/user");

// tenemos la funcion que hace la operacion de guardado 
async function addUser(userModel) {
  let user = new User({
    ...userModel,
  });
  await user.save();
  return user.toObject();
}
// tenemos la funcion que hace la operacion de obtener los usuarios
async function getUsers() {
  const users = await User.find();
  return users.map((x) => x.toObject());
}

// tenemos la funcion que obtiene los usuarios segun el ID
async function getUser(id) {
  const user = await User.findById(id);
  return user.toObject();
}

//tenemos la funcion que actualiza los registros de los usuarios
async function updateUser(id, userModel) {
  const filter = { _id: id };
  await User.findOneAndUpdate(filter, userModel);
}

//tenemos la funcion que elimina los registros de los usuarios
async function deleteUser(id) {
  await User.findByIdAndDelete(id);
}

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
