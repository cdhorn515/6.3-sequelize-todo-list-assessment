const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
//set variable named layout in mustache
//(variable name, file you want to use it in)
// app.set('layout', 'layout');

//express.static told where to find css files
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
var todoIdx = 0;

// models.Todo.create({
//   title: "buy groceries",
//   priority: 4,
//   "due_date": new Date(2017, 5, 30),
// });

// models.Todo.create({
//   title: "fold laundry",
//   "due_date": new Date(2017, 6, 1),
//   completed: true
// });

// models.Todo.create({
//   title: "wash the dog",
//   "due_date": new Date(2017, 6, 12),
//   completed: false
// });
//
// models.Todo.create({
//   title: "clean kitchen",
//   "due_date": new Date(2017, 5, 29),
//   completed: true
// });


app.get('/', function(req, res){
  //  todoIdx = 0;
  models.Todo.findAll().then(function(todos){
    res.render('index', {model: todos});
  });
});

app.post('/', function (req, res){
  models.Todo.create({
    title: req.body.title,
    priority: req.body.priority,
    due_date: new Date(req.body.due_date),
    completed: req.body.completed,
    assignee: req.body.assignee
  }).then(function(todo){
    res.redirect('/');
  });
});

app.post('/todo/:id', function (req, res){
  models.Todo.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(todo){
    todo.completed = true;
    todo.save();
    res.redirect('/');
  });
});

app.post('/update/:id', function (req, res) {
  models.Todo.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(todo){
  res.render('update', {model: todo});
    });
});

app.post('/edit/:id', function(req, res) {
  models.Todo.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(todo){
    todo.title = req.body.title,
    todo.priority = req.body.priority,
    todo.due_date = new Date(req.body.due_date),
    todo.completed = req.body.completed,
    todo.assignee = req.body.assignee;
    todo.save();
  }).then(function(){
    res.redirect('/');
  });
});

app.post('/delete/:id', function(req, res) {
  var id = req.params.id;
  models.Todo.destroy({
    where: {id: id}
  }).then(function() {
    res.redirect('/');
  });
});

app.listen(3000, function(){
console.log("app started successfully!");
});


// var context = {
//   todo: [
//   'Buy groceries'
//   , 'Fold laundry'
//   , 'Wash the dog'
// ]
// , todoId: function(){
//   return todoIdx++;
// }
// , completed: [
//   'Clean kitchen'
//   ,'Do homework'
// ]
// , completedId: function(){
//   return completedIdx++;
// }
// });
