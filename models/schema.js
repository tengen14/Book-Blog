var mongoose = require("mongoose");

//MONGOOSE / MODEL CONFIG
var blogSchema = new mongoose.Schema({
   title: String,
   author: String,
   image: String,
   desc: String
});

module.exports = mongoose.model("blogSchema", blogSchema);