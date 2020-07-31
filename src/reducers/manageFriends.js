export function manageFriends(state={friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]}
            break;
        case "REMOVE_FRIEND":
            function removeFriend(friend) {
                return friend.id != action.id;
            }
            return {friends: state.friends.filter(removeFriend)}
            break;
        default:
            return state;
    }
}
