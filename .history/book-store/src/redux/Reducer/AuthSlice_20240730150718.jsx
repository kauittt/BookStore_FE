import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchIngredientData(state, action) {
            state.error = null;
            state.ingredients = action.payload;
        },
        addIngredientData(state, action) {
            state.error = null;
            state.ingredients.push(action.payload);
        },
        updateIngredientData(state, action) {
            state.error = null;
            const { id, ingredientData } = action.payload;
            state.ingredients = state.ingredients.map((item) =>
                item.id === id ? { ...item, ...ingredientData } : item
            );
        },
        deleteIngredientData(state, action) {
            state.error = null;
            state.ingredients = state.ingredients.filter(
                (item) => item.id !== action.payload
            );
        },
        deleteIngredientDataFail(state, action) {
            state.error = action.payload;
        },
        resetError(state) {
            state.error = null;
        },
    },
});

export const {
    addIngredientData,
    deleteIngredientData,
    updateIngredientData,
    fetchIngredientData,
    deleteIngredientDataFail,
    resetError,
} = authSlice.actions;

export const selectIngredients = (state) => state.ingredient.ingredients;
export const selectIngredientsError = (state) => state.ingredient.error;
export default authSlice.reducer;
