import { combineReducers } from 'redux';
import note, { INoteState } from "./note";

export type RootState = {
  note: INoteState[];
};

const rootReducer = combineReducers({
  note: note.reducer,
});

export default rootReducer;
