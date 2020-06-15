import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISuggestion {
    recipeId: number;
    recipeName: string;
    cookingTime: string;
    cookingLevel: '쉬움' | '보통어려움';
    ingredientCategory: string;
    recipe: {
        imgUrl: string;
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

export interface ISuggestionState {
    suggestions: ISuggestion[];
    recipe: ISuggestion;
}

const initialState: ISuggestionState = {
    suggestions: [],
    recipe: null,
};

const suggestion = createSlice({
    name: 'suggestion',
    initialState,
    reducers: {
        setSuggestion: (state, action: PayloadAction<ISuggestion[]>): ISuggestionState => {
            const newSuggestion = action.payload;
            if (newSuggestion) {
                state.suggestions = newSuggestion;
                return state;
            } else {
                state.suggestions = [];
                return state;
            }
        },
        setRecipe: (state, action: PayloadAction<ISuggestion>): void => {
            state.recipe = action.payload;
        },
    },
});

export const { setSuggestion, setRecipe } = suggestion.actions;

export default suggestion;
