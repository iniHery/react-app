import "./TodoList.css";

const TodoList = (props) => {
  console.log(props.dataTodos);
  return (
    <ul>
      {props.dataTodos.map((todo) => {
        // { id: 1, tittle: 'eat'}
        return <li key={todo.id}>{todo.tittle}</li>;
      })}
    </ul>
  );
};

export default TodoList;
