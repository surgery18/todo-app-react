import React from "react";
import TodoAction from "../../compositions/TodoList/_actions.jsx";
import TextField from 'material-ui/TextField';

var TodoForm = React.createClass({
  getInitialState: function(){
    return {
      text: "",
    };
  },
  change: function(e){
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    if(this.state.text)
      TodoAction.addTodo({text: this.state.text, finished: false});
    this.setState({text: ""});
  },
  render: function(){
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <TextField
             hintText="TODO ITEM"
             floatingLabelText="TODO ITEM"
             onChange={this.change}
             value={this.state.text}
           />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
