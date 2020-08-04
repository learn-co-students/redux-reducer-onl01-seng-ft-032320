export function managePresents(state, action) {

    //numberOfPresents is key inside state, let state ={numberOfPresents:0}
    // let action = {type: "INCREASE"} this check a condition match when action is dispatch to update state if it match

    switch (action.type) {
        case "INCREASE":
            return { numberOfPresents: state.numberOfPresents + 1 }

        default:
            return state;
    }


}