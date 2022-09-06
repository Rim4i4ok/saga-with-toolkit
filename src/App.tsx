import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoRequest } from "./redux/stores/todo/actions";
import { getUsersApi } from "./redux/stores/users/actions";
import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "./redux/stores/todo/selectors";
import { getUsersSelector } from "redux/stores/users/selectors";

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);
  const users = useSelector(getUsersSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
    dispatch(getUsersApi());
  }, [dispatch]);

  return (
    <div style={{ padding: "15px" }}>
      <div>Users:</div>
      <div>
        {users.map((user, index) => (
          <div key={index} style={{ border: "solid 1px red" }}>
            <p>{user.gender}</p>
            <p>{user.name.first}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <div>TO DO:</div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        todos.map((todo, index) => (
          <div style={{ marginBottom: "10px" }} key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  );
};

export default App;
