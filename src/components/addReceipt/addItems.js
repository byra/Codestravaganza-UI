import React from "react";
import {Component, Fragment} from "react";
import Item from "./item";
import RemoveButton from "./removeButton";

class AddItems extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.itemKeys){
            return(
                this.props.itemKeys.map((identifier)=>(
                    <Fragment key={identifier}>
                        <Item/>
                        <RemoveButton identifier ={identifier}/>
                    </Fragment>

                ))
            )
        }
        else {
            return(null)
        }
    }

}

export default AddItems;