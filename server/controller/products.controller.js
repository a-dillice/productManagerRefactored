// import model
const Products = require("../models/products.model")

// setup modules
module.exports = {

    // setup index or home function
    index:(req, res) => {
        
        // find all documents
        Products.find().then((data) =>{

            // pass data to results 
            res.json({results:data});

        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err}); 

        });

    },
    // create one product
    create:(req, res) => {

        //get user data
        const userData = req.body;

        // add to collection
        Products.create(userData).then((data)=>{

            // pass data to results 
            res.json({results:data, success:"Product was successfully saved."});

        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err.errors}); 

        });

    },
    // show one product
    show:(req, res) =>{

        // get product id
        const productID = req.params._id;

        // find all documents
        Products.findOne({_id:productID}).then((data) =>{

            // pass data to results 
            res.json({results:data});

        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:"Product was not found."}); 

        });

    },
    // update product
    update:(req, res) => {

        // get product id
        const productID = req.params._id;
        
        // get user data
        const userData = req.body;

        // find and update our product
        Products.findOneAndUpdate({_id:productID}, userData, {new:true, runValidators:true, useFindAndModify:false}).then((data) => {

            // pass data to results 
            res.json({results:data, success:"Product was successfully saved."});

        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err.errors}); 

        });

    },
    // delete product
    destroy:(req, res) =>{

        // get product id
        const productID = req.params._id;

        // delete document based on id
        Products.deleteOne({_id:productID}).then((data) => {
            
            // pass data to results 
            res.json({success:`${data}`});
            
        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err.errors}); 

        });

    }


}
