import React from "react";
import TodoItem from "./TodoItem";
import "./style/TodoList.css";

const TodoList = ({ todos, onDel, onToggle }) => {
  return (
    <div>
      <ul className="TodoList">
        {todos.map((todos) => (
          <TodoItem
            key={todos.id}
            todos={todos}
            onDel={onDel}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
