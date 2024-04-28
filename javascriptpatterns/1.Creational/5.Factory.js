const createUser = ({ userName, avatar }) => ({
  userName,
  avatar,
  setUserName(userName) {
    this.userName = userName;
    return this;
  }
});
console.log(createUser({ userName: 'echo', avatar: 'echo.png' }));