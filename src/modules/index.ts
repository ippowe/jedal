import { combineReducers } from 'redux';
import note, { INoteState } from './note';
import answer, { IAnswerState } from './answer';

export type RootState = {
    note: INoteState[];
    answer: IAnswerState;
};

const rootReducer = combineReducers({
    note: note.reducer,
    answer: answer.reducer,
});

export default rootReducer;
