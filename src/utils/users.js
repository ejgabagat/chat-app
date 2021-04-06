const users = [];
// addUser, removeUser, getUser, getUsers

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the Data
  if (!username || !room) {
    return {
      error: 'Username and room are required!',
    };
  }

  //Check for Existing User
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (existingUser) {
    return {
      error: 'Username is in use!',
    };
  }
  // Store User
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  room = room.toLowerCase();
  return users.filter((user) => user.room === room);
};

const user = getUser(42);
console.log(user);
const userList = getUsersInRoom('room2');

console.log(userList);
// const removedUser = removeUser(22);
// console.log(removedUser);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
