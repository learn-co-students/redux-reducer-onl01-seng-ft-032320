let state = {friends: []}

export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let newState = {friends: [...state.friends, action.friend]}
            return newState
        case 'REMOVE_FRIEND':
            let reducedState = {friends: state.friends.filter(function(friend) {return friend.id != action.id})}
            return reducedState    
        default:
            return state;
    }
} 