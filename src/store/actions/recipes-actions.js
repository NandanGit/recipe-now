export const addRawData = (state, action) => {
	const data = action.payload.data;
	state.rawData.push(data);
	state.totalPages += 1;
};

export const updateSearchQuery = (state, action) => {
	state.searchQuery = action.payload.searchQuery;
};

export const resetRecipesState = (state) => {
	state.searchQuery = false;
	state.nextPageLink = false;
	state.currentPage = 0;
	state.totalPages = 0;
	state.rawData = [];
	state.formattedRecipesList = [];
};

export const updateCurrentPage = (state, action) => {
	const newPage = action.payload.newPage;
	state.currentPage = newPage;
	if (!state.rawData.length || !newPage) {
		return console.log('No data to update');
	}

	// Updating the formatted list
	const currentRawData = state.rawData[newPage - 1];
	const currentRawDataList = currentRawData.hits;
	const formattedRecipesList = currentRawDataList.map((currItem, ind) => {
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
		} = currItem.recipe;
		let foodType = 'loading';
		if (healthLabels.includes('Vegetarian')) {
			foodType = 'veg';
		} else if (
			healthLabels.includes('Egg-Free') &&
			!healthLabels.includes('Vegetarian')
		) {
			foodType = 'non-veg';
		} else if (!healthLabels.includes('Egg-Free')) {
			foodType = 'egg';
		}

		let labels = [];
		if (totalTime) {
			labels.push(`${totalTime} mins`);
		}
		labels = labels
			.concat(cuisineType || [])
			.concat(dishType || [])
			.concat(mealType || [])
			.concat(dietLabels || []);
		if (calories) {
			labels.push(`${calories.toFixed(0)} cal`);
		}
		return {
			id: `${ind}`,
			name: label,
			imgUrl: image,
			labels,
			foodType,
		};
	});
	state.formattedRecipesList = formattedRecipesList;

	// Update the nextPageLink
	const nextLink = currentRawData._links.next || { href: false };
	state.nextPageLink = nextLink.href;
};

// export const updateNextPage = (state) => {
// 	const currentPageData = state.rawData[state.currentPage - 1];
// 	state.nextPageLink = currentPageData._links.next || false;
// };
