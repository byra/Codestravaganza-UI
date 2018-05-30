export const list = (state = {}, action)=>{
    let temp = null;
    switch(action.type) {

        case "viewList":
            temp = Object.assign({}, state);
            temp.itemizedList= action.payload;
            return temp;

        case "clear":
            temp = Object.assign({}, state);
            temp.itemizedList=null;
            return temp;

        default:
            return state;
    }
};