import React from "react";
import Reflux from "reflux";
import TodoActions from "./_actions.jsx";

var TodoStore = Reflux.createStore({
  todos: [],
  id: 0,
  listenables: TodoActions,

  addTodo: function(todo) {
    todo.id = this.id++;
    this.todos.push(todo);
    this.trigger(this.todos);
  },

  finishTodo: function(todo){
    let item = this.todos.find((item) => item.id == todo.id);
    if(item){
      item.finished = true;
      this.trigger(this.todos);
    }
  }
});

module.exports = TodoStore;
