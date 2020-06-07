import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISuggestionState {
    recipeName: string;
    cookingTime: string;
    cookingLevel: '쉬움' | '보통어려움';
    ingredientCategory: string;
    recipe: {
        summary: string;
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
}

const initialState: ISuggestionState[] = [
    {
        recipeName: '다시마냉국',
        cookingTime: '30분 이하',
        cookingLevel: '보통어려움',
        ingredientCategory: '해조류',
        recipe: {
            summary: '철분과 무기질이 풍부한 다시마로 피부건강을 지켜보세요~',
            detailRecipes: [
                {
                    recipeId: '17',
                    tip: '',
                    step: '1',
                    text:
                        '다시마는 두텁고 광택이 있는 것으로 물에 씻어 젖은 행주로 여러 번 닦은 뒤 찬물 5컵에 담가 30분 정도 불렸다가 건져놓는다.',
                },
                {
                    recipeId: '17',
                    tip: '',
                    step: '2',
                    text: '오이는 소금으로 비벼 씻어 헹궈 가늘게 채썬 뒤 찬물에 잠시 담갔다가 건져놓는다.',
                },
                {
                    recipeId: '17',
                    tip: '',
                    step: '3',
                    text: '홍고추는 반으로 갈라 씨를 털어 곱게 채썬다.',
                },
                {
                    recipeId: '17',
                    tip: '',
                    step: '4',
                    text: '손질한 다시마를 돌돌 말아 가늘게 채썰어 달라붙지 않게 털어둔다.',
                },
                {
                    recipeId: '17',
                    tip: '',
                    step: '5',
                    text:
                        '넓은 그릇에 다시마, 채썬 오이, 홍고추를 담고 다진 파와 마늘, 고춧가루, 깨소금, 소금으로 양념하여 차게 해둔 ①을 붓는다.',
                },
            ],
        },
        seasonIngredients: [
            {
                category: '농산물> 채소류> 과채류',
                name: '오이',
                month: '5월',
                cookingTip:
                    '오이는 생으로 먹기도 하고 겉절이로 무쳐 먹기도 합니다. 소금에 절인 오이를 찬물에 헹구어 꼭 짜준 뒤 볶아서도 먹어요. 샐러드나 초무침으로도 조리하고, 오이소박이나 오이지, 오이장아찌, 오이냉국 등등 그 활용성이 매우 많아요. 조림과 볶음 등에도 이용하고 김치류나 피클류 같은 절임음식으로도 사용해요. 흔히 오이는 비타민 C의 파괴를 우려해 다른 채소와 함께 먹지 말아야 한다고 알려졌지만, 실제로 오이의 아스코르비나아제는 활성이 낮아서 다른 채소와 함께 먹어도 상관없습니다. 특히 초절임을 하는 경우에는 산에 의해서 효소의 활성이 모두 사라지기 때문에 무방합니다.',
                purchaseTip:
                    '싱싱하고 좋은 오이는 위쪽에서 아래까지 굵기가 일정한 것이 좋습니다. 오이의 돌기는 만져봤을 때 아플 정도로 따끔하게 서 있는 것이 좋아요. 신선한 오이는 줄기에서 딴 꼭지부분의 줄기에 하얀 잔가시가 있고, 꼭지에 꽃이 달려 있어요. 수확한지 얼마 되지 않은 싱싱한 오이랍니다. 짓무른 곳도 없어야 하고, 육질은 단단하며, 껍질에 주름이 잡힌 것은 피합니다. 중간이 가늘고 양쪽이 유난히 굵은 것은 쓴맛이 많이 나고, 통통한 부분을 갈라보았을 때 씨가 많은 것은 늙은 오이이므로 피합니다.',
            },
        ],
    },
];

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
