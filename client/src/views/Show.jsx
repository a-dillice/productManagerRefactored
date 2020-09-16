import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/main.module.css';
import DeleteButton from "../components/DeleteButton";

// show component
const Show = (props) => {

    // init api url
    const apiUrl = "//localhost:8000/api/products";

    // set productInfo
    const [productInfo, setProductInfo] = useState({});

    // use hook
    useEffect(() => {

        // get list of all products using api end point
        axios({
            method:'get',
            url:(apiUrl + "/" + props.id)
        //success 
        }).then((res) => {
            
            // check for errors
            if(res.data.errors){
                
                // set
                setProductInfo({errors:res.data.errors})
            
            // set product to state
            }else{
                
                // set
                setProductInfo(res.data.results)
            
            }

        // fail
        }).catch((err) => {
            console.log(err)
        })

    },[apiUrl, props.id])

    // remove product
    const removeProduct = (id) =>{

        // get list of all products using api end point
        axios({
            method:'delete',
            url:(apiUrl + "/delete/" + id)
        //success 
        }).then(() => {
            
            // go to main page
            navigate("/");
        
        // catch errors
        }).catch((err) => {
            console.log(err)
        })   

    }

    // return
    return(
        <div className={styles.showWrapper}>
            {(productInfo && productInfo.title) ? 
                <div><h1 className={styles.infoHeader}>{productInfo.title}</h1>
                <p><span className={styles.showSpan}>Price:</span> {productInfo.price}</p>
                <p className={styles.showDescription}>{productInfo.description}</p>
                <Link className="btn btn-sm btn-info ml-0" to={`/${productInfo._id}/edit`}>Edit {productInfo.title}</Link>
                <DeleteButton label={`Delete ${productInfo.title}`} callBack={() => {removeProduct(productInfo._id)}}/>
                </div> : ""}
            {(productInfo.errors) ? <p className="text-danger mb-0">{productInfo.errors}</p> : ""}
        </div>
    )

}

// export
export default Show;