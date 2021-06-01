const express = require("express");
const sequelize = require('./config/connection');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/users",  function(req,res){
   console.log("Inside: /api/user");
  
    db.User.findAll().then(function(userData){
      res.status(200).json(userData);
    });
    
    
 
});



app.get("/api/users/:id", function(req,res){
      console.log("Inside: /api/user/:id");
      db.User.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      include: [{ model: db.Product, through: db.Cart, as: 'user_Products' }]
    }).then(function(userData){
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      console.log("hello");
      res.status(200).json(userData);
    });

    
});



// creating my post route to create a user
app.post("/api/user", function(req,res){
  // I will create a new user here with this function
  // using the User model to create user login's 
    console.log("hello inside post route")
    // Save the users information
    db.User.create(req.body).then(function(){
      return res.json(true);
    });
 
});




app.get("/api/product", function(req,res){
 
    db.Product.findAll().then(function(productData){
      console.log(productData);
      res.status(200).json(productData);
    });
   

});

app.post("/api/product", function(req,res){
  
  console.log("hello inside post")

  console.log(req.body)
 
db.Product.create(req.body).then(function(){
    return res.json(true);
  });
});


app.get("/api/user/:id/cart/product", function(req,res){

  db.User.findByPk(req.params.id,{ include:[{model:db.Product,through:db.Cart,as:"user_Products"}] }).then(function(cartData){
    console.log(cartData.user_Products);
    res.status(200).json(cartData.user_Products);
  });

});

app.post("/api/user/:id/cart/product", function(req,res){
 var data = {
   user_id: req.params.id, 
   product_id: req.body.product_id,
 }

 db.Cart.create(data).then(function(){
    return res.json(true);
  });
});






// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

