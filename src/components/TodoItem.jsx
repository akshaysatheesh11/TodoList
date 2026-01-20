function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
