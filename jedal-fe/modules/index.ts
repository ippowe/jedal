import { combineReducers } from 'redux';
import todo, { ITodoState } from "./todo";

export type RootState = {
  todo: ITodoState[];
};

const rootReducer = combineReducers({
  todo: todo.reducer,
});

export default rootReducer;
