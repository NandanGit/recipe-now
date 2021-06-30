export const setRecipeLoadingState = (state, action) => {
	const isLoading = action.payload.isLoading;
	state.isRecipesLoading = isLoading;
};

export const setErrorMessage = (state, action) => {
	const { errorMessage, duration } = action.payload.errorMessage;
	state.errorMessage = errorMessage;
	setTimeout(() => {
		state.errorMessage = '';
	}, duration);
};
