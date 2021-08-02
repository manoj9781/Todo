const express = require('express');
const port = 8000;

const app = express();
app.use('/', require('./routes'));
const db = require('./config/mongoose');
const Task = require('./models/task');

app.use(express.static('./assets'));
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', './views');

app.post('/create-task', function (req, res) {
  Task.create(
    {
      task: req.body.task,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newTask) {
      if (err) {
        console.log('Error in creating New task', err);
        return;
      }
      console.log('******', newTask);
      return res.redirect('back');
    }
  );
});

app.get('/delete-task', function (req, res) {
  let id = req.query.id;

  Task.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log('Error', err);
      return;
    }
    return res.redirect('back');
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log('Error in running the server', err);
    return;
  }
  console.log('Server is ready on port', port);
});
