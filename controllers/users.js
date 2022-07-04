import { v4 as uuidv4 } from "uuid";

let user = [{firstname:"John",
lastname: "Doe",
age:25,
id:"00465"
},
{firstname:"Jane",
lastname: "Geller",
age:15,
id:"09876"
}];

export const createUser = (req, res) => {
  const User = req.body;
  user.push({ ...User, id: uuidv4() });
  res.send(`${User.firstname} is added to array`);
};

export const getAllUsers = (req, res) => {
  res.send(user);
};

export const getUser = (req, res) => {
  const id = req.params.id;
  const foundUser = user.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const id= req.params.id;
  user = user.filter((user) =>user.id !== id);
  res.send(`User with ${id} deleted!`);
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const updatedUser = user.find((user) => user.id === id);
  const { firstname, lastname, age } = req.body;
  if (firstname) {
    updatedUser.firstname = firstname;
  }
  if (lastname) {
    updatedUser.lastname = lastname;
  }
  if (age) {
    updatedUser.age = age;
  }
  res.send(`User with ${id} is updated`);
};
