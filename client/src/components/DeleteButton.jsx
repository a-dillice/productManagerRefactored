import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// setup button
const DeleteButton = (props) =>{

    // break props up
    const {label, callBack} = props;

    // return
    return(
        <button className="btn btn-sm btn-danger ml-3" onClick={callBack}>{label}</button>
    )

}

// export delete button
export default DeleteButton;