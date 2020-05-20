import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INoteState {
  id: number;
  desc: string;
  completed: boolean;
}

const initialState: INoteState[] = [{
  id: 1,
  desc: "운동 하기",
  completed: false
}, {
  id: 2,
  desc: "제철달력 만들기",
  completed: false
}];

let nextTodoId = initialState.length + 1;

const note = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: {
      reducer(state, action: PayloadAction<INoteState>) {
        const { id, desc, completed } = action.payload;
        state.push({ id: id, desc: desc, completed });
      },
      prepare(desc: string) {
        console.log(nextTodoId, initialState.length);
        return { payload: { id: nextTodoId++, desc, completed: false } };
      }
    },
    toggleNote(state, action) {
      console.log(action);
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addNote, toggleNote } = note.actions;

export default note;
