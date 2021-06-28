import { createSlice } from '@reduxjs/toolkit';
import {
	addRawData,
	updateCurrentPage,
	updateFormattedRecipesList,
	clearRawData,
} from '../store/actions/recipes-actions';

const initialRecipesState = {
	currentPage: 0,
	totalPages: 0,
	rawData: [
		// Store in pages
	],
	formattedRecipesList: [
		// Contains only the recipes in the current page
		{
			id: 0,
			name: 'Tomato Salad Grilled Pizza',
			imgUrl: 'https://www.edamam.com/web-img/28a/28ac183a985155b5593483a198acf16f.png',
			foodType: 'veg',
			labels: ['Indian', '10 min', 'Balanced', 'Protein Rich'],
		},
		{
			id: 1,
			name: 'Tomato Salad Grilled Pizza',
			imgUrl: 'https://www.edamam.com/web-img/80a/80a19d1ad6a0c42e0422e380ef9e194c.jpg',
			foodType: 'non-veg',
			labels: ['Italian', '60 min', 'High Carbs'],
		},
		{
			id: 2,
			name: 'Tomato Salad Grilled Pizza',
			imgUrl: 'https://www.edamam.com/web-img/855/85556f2d7a304d97c6767e4600c588d4.jpg',
			foodType: 'non-veg',
			labels: ['Gluten free', 'Sodium', 'Iron'],
		},
		{
			id: 3,
			name: 'Tomato Salad Grilled Pizza',
			imgUrl: 'https://www.edamam.com/web-img/52e/52ebe8eb9f3fb204c6fd12403d3ed09e.jpg',
			foodType: 'egg',
			labels: ['Spicy', '10 min', 'Balanced', 'Protein Rich'],
		},
		{
			id: 4,
			name: 'Tomato Salad Grilled Pizza',
			imgUrl: 'https://www.edamam.com/web-img/b7e/b7ef79d492fd308c920a9f5b2f4ab064.jpg',
			foodType: 'egg',
			labels: ['Organic', '10 min', 'No preservatives', 'Protein Rich'],
		},
		{
			id: 5,
			name: 'Tomato Salad Grilled Pizza',
			imgUrl: 'https://www.edamam.com/web-img/36c/36cb2c544928c75d950c08d62e9f7e56.jpg',
			foodType: 'veg',
			labels: ['Indian', '10 min', 'Balanced', 'Protein Rich'],
		},
	],
};

const recipesSlice = createSlice({
	name: 'recipes',
	initialState: initialRecipesState,
	reducers: {
		// Synchronous Actions
		addRawData,
		updateCurrentPage,
		updateFormattedRecipesList,
		clearRawData,
		// -------------------
		// Asynchronous Actions
	},
});

export const recipesActions = recipesSlice.actions;

export default recipesSlice;
