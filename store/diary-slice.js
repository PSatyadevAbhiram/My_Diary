import { createSlice } from "@reduxjs/toolkit";

const diarySlice = createSlice({
    name: 'diary',
    initialState: {
        title: 'test',
        id: 'i1',
        date: new Date(),
        description: 'test desc',
        rating: 4,
    },
    reducers: {
        setDate: (state, action) => {
            state.date = new Date(action.payload);
        }
    }
});

export const diaryActions = diarySlice.actions;
export default diarySlice;