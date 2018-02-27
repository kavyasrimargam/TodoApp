var express = require("express"); // importing express package to your app
var app = express(); // crating an instance of express and storing into app variable
app.listen(3000, function(err){
    if(!err){
        console.log("app is listening at http://localhost:3000");
    }
});
