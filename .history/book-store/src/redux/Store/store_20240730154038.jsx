const store = configureStore({
    reducer: {
        drink: drinkSlice,
        order: orderSlice,
        type: typeSlice,
        ingredient: ingredientSlice,
        voucher: voucherSlice,
        //drinkTypes: drinkTypesReducer,
        statistic: statisticSlice,
        shop: shopSlice,

        // Đặt các reducer khác ở đây nếu cần
    },
    // Thêm middleware khác nếu cần

    // Thêm middleware khác nếu cần
});

export default store;
