const defaultState = {
    friends: [
        {
            name: 'Avi',
            hometown: 'NYC',
            id: 100
        }
    ]
}

export function manageFriends(state = defaultState, action) {


    switch (action.type) {
        case "ADD_FRIEND":
            return Object.assign({}, state, {
                friends: [
                    ...state.friends,
                    {
                        "name": action.friend.name,
                        "hometown": action.friend.hometown,
                        "id": action.friend.id
                    }
                ]
            })
        case "REMOVE_FRIEND":
            return Object.assign({}, state, {
                friends: state.friends.filter(friend => friend.id !== action.id)
            })

        default:
            return state;
    }
}
