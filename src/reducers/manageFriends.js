

export function manageFriends(state, action){
let j = state.friends.findIndex(person => person.name === "Joe")   
 let s = state.friends.findIndex(person => person.name === "Steven")
    switch(action.type){

        case 'ADD_FRIEND':
            return { friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            return{friends: [...state.friends.slice(0,j),...state.friends.slice(2)]}
        default:
            return state;
    }
}
