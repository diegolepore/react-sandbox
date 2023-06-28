import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/store';
import { fetchTodos, selectAllTodos } from '../store/todos/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useAppSelector(selectAllTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
