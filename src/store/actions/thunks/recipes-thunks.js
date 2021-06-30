import { recipesActions } from '../../recipes-slice';
import { UIActions } from '../../ui-slice';

export const fetchRecipes = (url) => {
	return async (fire) => {
		fire(UIActions.setRecipeLoadingState({ isLoading: true }));
		// console.log(url);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Something went wrong');
			}
			const data = await response.json();

			// console.log(data);
			// Remove unnecessary data
			data.hits.forEach((hit) => {
				const {
					label,
					image,
					healthLabels,
					totalTime,
					dietLabels,
					cuisineType,
					dishType,
					mealType,
					calories,
				} = hit.recipe;
				hit.recipe = {
					label,
					image,
					healthLabels,
					totalTime,
					dietLabels,
					cuisineType,
					dishType,
					mealType,
					calories,
				};
			});
			// Add it to raw data
			fire(recipesActions.addRawData({ data }));

			fire(UIActions.setRecipeLoadingState({ isLoading: false }));
		} catch (err) {
			fire(UIActions.setErrorMessage(err.message));
			fire(recipesActions.updateSearchQuery({ searchQuery: false }));
		}
	};
};
