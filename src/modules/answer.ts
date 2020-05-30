import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAnswerState {
    season?: string;
    level?: string;
    catetories?: string[];
    excludes?: string[];
}

const initialState: IAnswerState = {};

const answer = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        setAnswer: (state, action: PayloadAction<IAnswerState>): void => {
            Object.keys(action.payload).map((key) => {
                const answer = action.payload[key];
                if (answer !== undefined) {
                    state[key] = answer;
                }
            });
        },
    },
});

export const { setAnswer } = answer.actions;

export default answer;
