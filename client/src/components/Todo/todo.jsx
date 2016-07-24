import React from "react";
import classNames from "classNames";

export default class Todo extends React.Component {
  render() {
    let build = null;
    if(!this.props.todo.finished){
      build = (<div className="todo-mark">
        <button onClick={this.props.clickCB}>Finish</button>
      </div>);
    }
    return (
      <li className="todo-item">
        <div className={classNames("todo-text", {"finished": this.props.todo.finished})} >
          {this.props.todo.text}
        </div>
        {build}
      </li>
    );
  }
};
