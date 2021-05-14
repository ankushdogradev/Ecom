const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123@abcd", 10),
    isAdmin: true,
  },
  {
    name: "Lionel Messi",
    email: "messi@example.com",
    password: bcrypt.hashSync("123@abcd", 10),
  },
  {
    name: "Christiano Ronaldo",
    email: "ronaldo@example.com",
    password: bcrypt.hashSync("123@abcd", 10),
  },
];

module.exports = users;
