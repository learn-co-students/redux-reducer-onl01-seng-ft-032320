let state = { friends: [] };
export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const friendId = action.id;
      return {
        ...state,
        friends: state.friends.filter(({ id }) => id !== friendId),
      };
    default:
      return state;
  }
}

//state.friends.filter(({ id }) => id !== friendId);
