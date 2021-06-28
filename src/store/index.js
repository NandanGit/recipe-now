import { configureStore } from '@reduxjs/toolkit';
import recipesSlice from './recipes-slice';
import UISlice from './ui-slice';

const store = configureStore({
	reducer: {
		recipes: recipesSlice.reducer,
		UI: UISlice.reducer,
	},
});

export default store;
