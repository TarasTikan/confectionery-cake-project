const cartSlice = createSlice({
    name: "cart",
    initialState = {[]},
    reducers: {
        addCart: (state, action) => {
            return [...state, action.payload];
        }
    }
})