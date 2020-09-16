import React, {useState} from 'react';
import Form from '../components/Form';
import ListAll from '../components/ListAll';
import axios from 'axios';

// create component
const Create = (props) => {

    // setup form reset var
    const formReset = {
        description:"",
        title:"",
        price:""
    }

    // store input values
    const [inputs, setInputs] = useState(formReset);

    // store success values
    const [success, setSuccess] = useState("");
    
    // store errors values
    const [errors, setErrors] = useState({});


    // get input values
    const getInputs = (e) =>{

        // as user types inputs set them
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
        
    }

    // create form submission
    const submitCreate = (e) => {

        // prevent default submit
        e.preventDefault();

        // send post data to api endpoint
        axios({
            method:'post',
            url:'//localhost:8000/api/products/create',
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
                setInputs(formReset);
                
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
                formTitle = {"Product Manager"}
                bttnLabel = {"Create"}
                submitCallBack={submitCreate}
                getInputs={getInputs}
                inputs={inputs}
                errors={errors}
                success={success}
            />
            <ListAll success={success}/>
        </div>
    )

}

// export
export default Create;