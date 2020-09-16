import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import axios from 'axios';

// Update component
const Update = (props) => {

    // set api url
    const apiUrl = "//localhost:8000/api/products";

    // store input values
    const [inputs, setInputs] = useState({
        description:"",
        title:"",
        price:""
    });

    // store success values
    const [success, setSuccess] = useState("");
    
    // store errors values
    const [errors, setErrors] = useState({});

    // grab current data
    useEffect(() => {

        // get list of the product using api end point
        axios({
            method:'get',
            url:(apiUrl + "/" + props.id)
        //success 
        }).then((res) => {
            
            // check for errors
            if(res.data.errors){
                
                // set errors
                setErrors({errors:res.data.errors})
               
               // set product to state
            }else{
                
                // set input
                setInputs(res.data.results)

            }

        // fail
        }).catch((err) => {
            console.log(err)
        })
        
    },[props.id])


    // get input values
    const getInputs = (e) =>{

        // as user types inputs set them
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
        
    }

    // Update form submission
    const submitUpdate = (e) => {

        // prevent default submit
        e.preventDefault();

        // send post data to api endpoint
        axios({
            method:'put',
            url:apiUrl + "/" + props.id + "/edit",
            data:inputs    
        //success 
        }).then((res) => {

            // check for any validation errors
            if(res.data.errors){
                
                // set errors
                setErrors(res.data.errors);
            
            // pass good data
            }else{

                // update success msg
                setSuccess(`${res.data.results.title} was successfully saved.`);

                // reset form
                setInputs(inputs);
                
                // reset errors
                setErrors({});
                
            }
            
        // catch other errors
        }).catch((err)=>{
            
            // console msg
            console.log(err)

        })

    }

    // return 
    return(
        <div>
            <Form
                formTitle = {"Update Product"}
                bttnLabel = {"Update"}
                submitCallBack={submitUpdate}
                getInputs={getInputs}
                inputs={inputs}
                errors={errors}
                success={success}
            />    
        </div>
    )

}

// export
export default Update;