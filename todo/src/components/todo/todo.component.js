import './todo.component.css';
import React from 'react';

export class TodoComponent extends React.Component {

  render() {
    return (
        <div className="todo">
            <div className="todo--item">{this.props.todo.title}</div>
        </div>
    );
  }
}
