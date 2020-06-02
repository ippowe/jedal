import { combineReducers } from 'redux';
import note, { INoteState } from './note';
import answer, { IAnswerState } from './answer';
import suggestion, { ISuggestionState } from './suggestion';

export type RootState = {
    note: INoteState[];
    answer: IAnswerState;
    suggestion: ISuggestionState[];
};

const rootReducer = combineReducers({
    note: note.reducer,
    answer: answer.reducer,
    suggestion: suggestion.reducer,
});

export default rootReducer;
