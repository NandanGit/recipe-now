import { createSlice } from '@reduxjs/toolkit';
import {
	addRawData,
	resetRecipesState,
	updateCurrentPage,
	updateSearchQuery,
	// updateNextPage,
} from '../store/actions/recipes-actions';

export const initialRecipesState = {
	searchQuery: false,
	nextPageLink: false,
	currentPage: 0,
	totalPages: 0,
	rawData: [
		// Store in pages
	],
	formattedRecipesList: [],
};

const recipesSlice = createSlice({
	name: 'recipes',
	initialState: initialRecipesState,
	reducers: {
		// Synchronous Actions
		addRawData,
		updateCurrentPage,
		resetRecipesState,
		updateSearchQuery,
		// updateNextPage,
	},
});

export const recipesActions = recipesSlice.actions;

export default recipesSlice;
