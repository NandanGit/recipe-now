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

			// Process data
			// console.log(data.hits);
			fire(UIActions.setRecipeLoadingState({ isLoading: false }));
			// Add it to raw data
			fire(recipesActions.addRawData({ data }));
		} catch (err) {
			fire(UIActions.setErrorMessage(err.message));
		}
	};
};
