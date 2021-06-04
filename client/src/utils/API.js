import axios from "axios";

export default {
  // Gets all Product
  getProducts: function() {
    return axios.get("/api/user/:id/cart/product");
  },
  // Gets the Product with the given id
  getProducts: function(id) {
    return axios.get("/api/user/:id/cart/product" + id);
  },
  // Deletes the Product with the given id
  deleteProducts: function(id) {
    return axios.delete("/api/user/:id/cart/product" + id);
  },
  // Saves a Product to the database
  saveProducts: function(bookData) {
    return axios.post("/api/user/:id/cart/product", bookData);
  },
  addToCart: function(product_id) {
    return axios.post("/api/user/"+id+"/cart/product", product_id);
  }
};