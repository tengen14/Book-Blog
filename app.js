var methodOverride = require("method-override"),
    blogSchema     = require("./models/schema"),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    seedDB         = require("./seeds"),
    express        = require("express"),
    app            = express();

//APP CONFIG
mongoose.connect("mongodb://localhost:3000")
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));


seedDB();

//LANDING Page Route
app.get("/", function(req, res){
   res.render("landing");
});

//RESTful ROUTES

//INDEX (Home)
app.get("/books", function(req, res){
   blogSchema.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("index", {blogs : blogs});
        }
    });
});

//NEW
app.get("/books/new", function(req, res){
   res.render("new");
});

//CREATE
app.post("/books", function(req, res){
   blogSchema.create(req.body.blog, function(err, newBlog){
      if (err) {
          res.render("/");
      } else {
          res.redirect("/books");
      }
   });
});

//SHOW
app.get("/books/:id", function(req, res){
   blogSchema.findById(req.params.id, function(err, foundBlog){
       if (err) {
           console.log(err);
       } else {
           res.render("show", {blog: foundBlog});
       }
   });
});

//EDIT
app.get("/books/:id/edit", function(req, res){
    blogSchema.findById(req.params.id, function(err, foundBlog){
        if (err) {
            console.log(err);
        } else {
            res.render("edit", {blog: foundBlog});
        }
    })
});

//UPDATE
app.put("/books/:id", function(req, res){
   blogSchema.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
       if (err) {
           res.redirect("/books");
       } else {
           res.redirect("/books/" + req.params.id);
       }
   }); 
});

//DELETE
app.delete("/books/:id", function(req, res){
   blogSchema.findByIdAndRemove(req.params.id, function(err, removedBlog){
     if (err) {
        console.log(err);
     } else {
        res.redirect("/books");
     }
   });
});
    
app.listen(3000, 'localhost',  function(){
    console.log("SERVER IS RUNNING");
});