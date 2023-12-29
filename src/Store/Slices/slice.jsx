import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      return {
        ...state,
        categories: action.payload,
        status: 'succeeded',
      };
    },
    updateError: (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    },
  },
});

export const { updateCategories, updateError } = categoriesSlice.actions;
export default categoriesSlice.reducer;