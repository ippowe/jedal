import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISuggestionState {
    //Todo Backend에서 데이터 형식 확인해서 수정
    any;
}

const initialState: ISuggestionState[] = [];

const suggestion = createSlice({
    name: 'suggestion',
    initialState,
    reducers: {
        setSuggestion: (state, action: PayloadAction<ISuggestionState[]>): void => {
            const newSuggestion = action.payload;
            if (!newSuggestion) {
                state = newSuggestion;
            } else {
                state = [];
            }
        },
    },
});

export const { setSuggestion } = suggestion.actions;

export default suggestion;
