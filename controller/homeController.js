const Task = require('../models/task');

module.exports.home = function (req, res) {
  Task.find({}, function (err, newTask) {
    if (err) {
      console.log('Error', err);
      return;
    }
    return res.render('home', {
      title: 'Home',
      task_list: newTask,
    });
  });
};

