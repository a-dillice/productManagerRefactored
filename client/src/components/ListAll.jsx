import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/main.module.css';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

// list all products
const ListAll = (props) => {

    // this is to update list component
    const [deleted, setDeleted] = useState("");

    // init api url
    const apiUrl = "//localhost:8000/api/products";

    // set list
    const [listAll, setListAll] = useState("")
    
    // use hook
    useEffect(() => {

        // get list of all products using api end point
        axios({
            method:'get',
            url:apiUrl 
        //success 
        }).then((res) => {

            // set list
            setListAll(res.data.results);
            
        }).catch((err) => {
            console.log(err)
        })
    
    // update on successful msg and when item is deleted
    },[props.success, deleted]);

    // remove product
    const removeProduct = (id) => {

        // get list of all products using api end point
        axios({
            method:'delete',
            url:(apiUrl + "/delete/" + id)
        //success 
        }).then((res) => {
            
            //update delete based on id
            setDeleted(id)
        
        // catch errors
        }).catch((err) => {
            console.log(err)
        })        

    }

    // return
    return(
        <div className={styles.listAllWrapper}>
            <h1 className="text-center mb-3">All Products</h1>
            <ul className="list-group">
                {Object.entries(listAll).map(([key, item]) =>{
                    return( 
                        <li className="list-group-item" key={key}>
                            <Link to={`/${item._id}`}>{item.title}</Link>
                            <Link className="btn btn-sm btn-info ml-3" to={`/${item._id}/edit`}>Edit {item.title}</Link>
                            {/* <button className="btn btn-sm btn-danger ml-3" onClick={(e)=>{removeProduct(item._id)}}>Delete {item.title}</button> */}
                            <DeleteButton label={`Delete ${item.title}`} callBack={() => {removeProduct(item._id)}}/>
                        </li>
                    )
                })}
                {(Object.entries(listAll).length <= 0)? <p className="text-danger text-center mb-0">No products found.</p>:""}

            </ul>
        </div>
    )
    
}


// export 
export default ListAll;