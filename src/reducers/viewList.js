export const list = (state = {}, action)=>{
    switch(action.type) {
        case "viewList":
            return Object.assign({itemizedList:action.payload}, state);

        case "clear":
            let temp = Object.assign({}, state);
            temp.itemizedList=null;
            return temp;

        default:
            return state;
    }
};