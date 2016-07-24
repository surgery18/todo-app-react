import React from "react";
import TodoList from "../compositions/TodoList/TodoList.jsx";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className="AppContainer">
          <h2>To do app</h2>
          <TodoList />
        </div>
      </MuiThemeProvider>
    );
  }
};
