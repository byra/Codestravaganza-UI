export const newItem = () =>{
    return{
        type:"addNewItem",
        payload:null
    };
};

export const removeItem = (identifier) =>{
    return{
        type:"removeItem",
        payload:identifier
    };
};