export function manageFriends(state, action) {
    switch (action.type) {
        case 'ADD_FRIEND':
            return ( {...state, friends: [...state.friends, action.friend] } )
        case 'REMOVE_FRIEND':
            let friendId = state.friends.findIndex(friend => friend.id === action.id)
            return ( {...state, friends: [...state.friends.slice(0, friendId), ...state.friends.slice(friendId + 1) ] } )
        default:
            return state 
    }
}

