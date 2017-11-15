'use strict';

module.exports = function(Todo) {
  Todo.observe('before save', function addOrder(ctx, next) {
      if (ctx.instance) {
        Todo.find({}, function(err, todos) {
          ctx.instance.order = todos.length;
          next();
        });
      }
    }
  );
};
