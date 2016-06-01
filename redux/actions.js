let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  requestUserInfo: function() {
    return {
      type: 'REQUEST_USER_INFO'
    };
  },

  receiveUserInfo: function(info) {
    return {
      type: 'RECEIVE_USER_INFO',
      userInfo : info
    }
  },

  createNewUserIdAsync: function() {
    return (dispatch) => {

      dispatch(actions.requestUserInfo());

      setTimeOut(() => {
        return fetch('//localhost:64325/')
        	.then(function(response) {
        		if (response.status >= 400) {
        			throw new Error("Bad response from server");
        		}
        		return response.json();
        	})

        	.then(function(userInfo) {
        		dispatch(actions.receiveUserInfo(userInfo))
        	})
      }, 2000)

    }

  }

}

export default actions
