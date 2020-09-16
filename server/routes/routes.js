// import controller
const ProductsController = require("../controller/products.controller")

// setup routes url 
module.exports = (app) => {

    app.get("/api/products", ProductsController.index);
    app.post("/api/products/create", ProductsController.create);
    app.delete("/api/products/delete/:_id", ProductsController.destroy);
    app.put("/api/products/:_id/edit", ProductsController.update);
    app.get("/api/products/:_id", ProductsController.show);

}