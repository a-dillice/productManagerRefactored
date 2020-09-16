// imports
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/main.module.css';


// CreateForm component
const CreateForm = (props) => {

    // pass props thru
    const {formTitle, bttnLabel, submitCallBack, getInputs, inputs, success, errors} = props;

    // return
    return (
        <div className={styles.createWrapper}> 
            <div className={`jumbotron jumbotron-fluid ${styles.jumboTron}`}>
                <div className="container">
                    <h1 className="display-4 text-center">{formTitle}</h1>
                    <form className={styles.createForm} onSubmit={submitCallBack}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" name="title" value={inputs.title} onChange={getInputs} />
                            <small className="form-text text-danger">{(errors.title) ? errors.title.message : ""}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="text" className="form-control" id="price" name="price" value={inputs.price} onChange={getInputs} />
                            <small className="form-text text-danger">{(errors.price) ? errors.price.message : ""}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" className="form-control" name="description" value={inputs.description} onChange={getInputs}></textarea>
                            <small className="form-text text-danger">{(errors.description) ? errors.description.message : ""}</small>
                        </div>
                        <button type="submit" className="btn btn-primary">{bttnLabel}</button>
                    </form>
                </div>
            </div>
            <small className="form-text text-success text-center">{(success !== "") ? success : ""}</small>
        </div>
    )

}

// export
export default CreateForm;