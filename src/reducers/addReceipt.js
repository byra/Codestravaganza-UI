export const receipts = (state = {}, action)=>{
    switch(action.type) {
        case "status":
            return Object.assign({statusMsg:action.payload}, state);

        default:
            return state;
    }
};