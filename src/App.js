import React, { Component } from 'react';
import TodoList from "./components/todo/TodoList";

const appWrapperStyles = {
    marginLeft: "auto",
    marginRight: "auto"
}

class App extends Component {
    render() {
        return (
            <div className="md-grid">
                <div className="md-cell md-cell--6" style={appWrapperStyles}>
                    <TodoList />
                </div>
            </div>
        );
    }
}

export default App;
