export const addRawData = (state, action) => {
	const data = action.payload.data;
	state.rawData.push(data);
	state.totalPages += 1;
};

export const clearRawData = (state) => {
	state.rawData = [];
};

export const updateFormattedRecipesList = (state) => {
	const currentRawDataList = state.rawData[state.currentPage - 1].hits;
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
		// if (cuisineType) {
		// 	labels = labels.concat(cuisineType);
		// }
		// if (dishType) {
		// 	labels = labels.concat(dishType);
		// }
		// if (mealType) {
		// 	labels = labels.concat(mealType);
		// }
		// if (dietLabels) {
		// 	labels = labels.concat(dietLabels);
		// }
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
};

export const updateCurrentPage = (state, action) => {
	const newPage = action.payload.newPage;
	state.currentPage = newPage;
};
