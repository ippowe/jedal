import { combineReducers } from "redux";
import note, { INoteState } from "./note";
import answer, { IAnswerState } from "./answer";
import suggestion, { ISuggestionState } from "./suggestion";
import toast, { IToastState } from "./toast";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import user, { IUserState } from "./user";

export type RootState = {
  note: INoteState[];
  answer: IAnswerState;
  suggestion: ISuggestionState;
  toast: IToastState;
  user: IUserSTate;
};

const rootReducer = combineReducers({
  note: note.reducer,
  answer: answer.reducer,
  suggestion: suggestion.reducer,
  toast: toast.reducer,
  user: user.reducer
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export default rootReducer;
