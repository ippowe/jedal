import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodoState {
  id: number;
  desc: string;
  completed: boolean;
}

const initialState: ITodoState[] = [{
  id: 1,
  desc: "운동 하기",
  completed: false
}, {
  id: 2,
  desc: "제철달력 만들기",
  completed: false
}];

let nextTodoId = initialState.length + 1;

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<ITodoState>) {
        const { id, desc, completed } = action.payload;
        state.push({ id: id, desc: desc, completed });
      },
      prepare(desc: string) {
        console.log(nextTodoId, initialState.length);
        return { payload: { id: nextTodoId++, desc, completed: false } };
      }
    },
    toggleTodo(state, action) {
      console.log(action);
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todo.actions;

export default todo;
