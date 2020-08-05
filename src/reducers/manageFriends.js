export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend] }
        case "REMOVE_FRIEND":
            return Object.assign({}, state, {
                friends: state.friends.filter((friend) => friend.id !== action.id),
              });
        default: 
              return state;
    }
}

//the initial state should be an object with a key, friends, set to an empty array.
//When adding a friend, the action will include a friend key assigned to an object with name, hometown, and id keys.