// init/import
const express = require("express"),
cors = require("cors"),
app = express(),
port = 8000;
    
// init/listen to server on port
const server = app.listen(port, ()=>{

    // console log msg
    console.log(`Server has started on port...${port}`);

})

// setup app
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// import database config file
require("./config/config");

// import routes file
const myRoutes = require("./routes/routes");
myRoutes(app); 