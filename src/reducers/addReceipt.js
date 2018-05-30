export const receipts = (state = {}, action)=>{
    let temp = null;
    switch(action.type) {
        case "status":
            temp = Object.assign({}, state);
            temp.statusMsg = action.payload;
            return temp;

        default:
            return state;
    }
};