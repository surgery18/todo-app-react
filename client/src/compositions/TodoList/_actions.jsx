import React from "react";
import Reflux from "reflux";

var TodoActions = Reflux.createActions([
  "addTodo",
  "finishTodo",
]);

module.exports = TodoActions;
