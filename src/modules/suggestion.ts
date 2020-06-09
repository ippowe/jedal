import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISuggestionState {
    recipeName: string;
    cookingTime: string;
    cookingLevel: '쉬움' | '보통어려움';
    ingredientCategory: string;
    recipe: {
        summary: string;
        amount: string;
        detailRecipes: {
            recipeId: string;
            tip: string;
            step: string;
            text: string;
        }[];
    };
    seasonIngredients: {
        category: string;
        name: string;
        month: string;
        cookingTip: string;
        purchaseTip: string;
    }[];
    ingredients: {
        name: string;
        amount: string;
    }[];
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
