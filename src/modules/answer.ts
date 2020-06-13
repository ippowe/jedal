import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAnswerState {
    season?: string;
    level?: string;
    catetories?: string[];
    hateIngredients?: string[];
}

const initialState: IAnswerState = {};

const answer = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        setAnswer: (state, action: PayloadAction<IAnswerState>): IAnswerState => {
            Object.keys(action.payload).forEach((key) => {
                const answer = action.payload[key];
                if (answer !== undefined) {
                    state[key] = answer;
                }
            });
            return state;
        },
        resetAnswer: (): IAnswerState => {
            return {};
        },
    },
});

export const { setAnswer, resetAnswer } = answer.actions;

export default answer;
