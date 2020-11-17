import './App.css';
import React from 'react';
import { Todo } from './models/todo';
import { TodoComponent } from './components/todo/todo.component'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        new Todo(0, 'do flex 1')
      ]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((state, props) => {
        return {
          todoList: [
            ...state.todoList,
            new Todo(1, 'Do another flex')
          ]
        }
      }
      );
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="todo--item-list">
            {
              this.state.todoList.map((todo) => (
                <li className="todo--item">
                  <TodoComponent todo={todo}></TodoComponent>
                </li>
              ))
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
