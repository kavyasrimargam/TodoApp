const express = require("express"); // importing express package to your app
const app = express(); // crating an instance of express and storing into app variable
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views", "./views");
app.use(express.static("./assets"));
app.get("/", function(req, res){
    res.send("index");
} );


// web page to display list of user tasks
app.get("/tasks", function(req,res){
   // console.log(req.query);
   // res.send("list of tasks "+ req.query.task_name);
    res.render("allTasks");
});

// Web page to add a task 
app.get("/task/add", function(req,res){
	//res.send("task add page")
    	res.render("addTask");
});

// to add task into database
app.post("/task/add", function(req,res){
   console.log(req.body);
   res.send("task add via post request");
});

// to edit a task in database
app.get("/task/edit/:id", function(req,res){
    // write delete code here
    res.render("editTask");
});

// to edit a task in database
app.post("/task/save/:id", function(req,res){
    // write delete code here
});

// to delete a task in database 
app.post("/task/delete/:id", function(req,res){
    // write delete code here
});

// web page to show single task with id given as part of route URL 
app.get("/task/:id", function(req, res){
  //  console.log(req.params);
    //res.send(" task - "+ req.params.id );
    res.render("viewTask");
});

app.listen(3000, function(err){
    if(!err){
        console.log("app is listening at http://localhost:3000");
    }
});
