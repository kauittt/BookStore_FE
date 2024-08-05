import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    accessToken: null,
    refreshToken: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticate(state, action) {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            
        }
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

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export default authSlice.reducer;
