const mongoose = require("mongoose");

// setup database/collection
const db = "product_manager";

// connect to db
mongoose.connect(`mongodb://localhost/${db}`,{
    // set options
    useNewUrlParser:true,
    useUnifiedTopology:true

// success
}).then(() => {
    
    // console msg
    console.log("Successfully connected to the database...");

// catch error
}).catch((err) => {

    // console msg
    console.log("ERROR: Could not connect to the database!");

})