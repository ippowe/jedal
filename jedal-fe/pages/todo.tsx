import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useState } from "react";
import { addTodo, toggleTodo } from "../modules/todo";

export type TodoPageProps = {};

function TodoPage(props: TodoPageProps) {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo, shallowEqual);

  return (
    <div>
      <h1>TODOList</h1>
      <ToDoInput/>
      <ul>
        {todoList.map(todo => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;

const ToDoInput = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const onChange = e => setTodoText(e.target.value);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!todoText.trim()) {
            return;
          }
          dispatch(addTodo(todoText));
          setTodoText("");
        }}
      >
        <input value={todoText} onChange={onChange}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
