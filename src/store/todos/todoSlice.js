import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTodos } from '../../api';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const todos = await getTodos();
  return todos;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.todos = action.payload

      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      });
  }
});

export const selectAllTodos = state => state.todos.todos;

export default todoSlice.reducer;
