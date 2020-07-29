export function manageFriends(state, action){
   switch (action.type) {
      case "ADD_FRIEND":
         let friend = action.friend
         return {friends: [...state.friends, friend]}

      case "REMOVE_FRIEND":
         return {friends: [...state.friends.filter(friend => friend.id !== action.id)]}
   
      default:
         return state
   }
}
