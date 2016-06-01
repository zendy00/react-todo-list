
let userReducer = function(user = {}, action) {

  switch (action.type) {

    case 'CREATE_USER_ID':
      return {
        username: user.username,
        id: action.id
      }

    case 'REQUEST_USER_INFO':
      return {
        username: 'Loading...',
        id: action.id
      }

    case 'RECEIVE_USER_INFO':
     console.log(action);
     console.log(user);
      return {
        username: action.userInfo.username,
        id: action.id
      }

    default:
      return user;
  }
}

export default userReducer
