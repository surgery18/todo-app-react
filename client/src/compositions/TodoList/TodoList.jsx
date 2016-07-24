import React from "react";
import Reflux from "reflux";
import TodoStore from "./_store.jsx";
import Todo from "../../components/Todo/todo.jsx";
import TodoAction from "./_actions.jsx";
import TodoForm from "../../components/Todo/_form.jsx";

var TodoList = React.createClass({
  mixins: [Reflux.connect(TodoStore, "todos")],
  finishedTask: (e) => {
    TodoAction.finishTodo(e);
  },
  render: function() {
    var list = null;
    if(this.state.todos){
      var build = this.state.todos.map((item) => {
        return (
          <Todo todo={item} clickCB={this.finishedTask.bind(this, item)} />
        );
      });
    }
    return (
      <div className="todo">
        <ul className="todo-list" type="square">
          {build}
        </ul>
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoList;
