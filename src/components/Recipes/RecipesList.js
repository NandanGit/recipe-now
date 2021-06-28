import React from 'react';
import { useSelector } from 'react-redux';

import RecipesListItem from './RecipeListItem/RecipeListItem';

import './RecipesList.css';

function RecipesList(props) {
	const recipeList = useSelector(
		(state) => state.recipes.formattedRecipesList
	);
	const isBeginning = useSelector((state) => state.UI.isBeginning);
	const isLoading = useSelector((state) => state.UI.isRecipesLoading);

	let formattedRecipeList;
	if (isLoading) {
		formattedRecipeList = [];
		for (let ind = 0; ind < 8; ind++) {
			formattedRecipeList.push(
				<RecipesListItem isLoading={true} key={ind} />
			);
		}
	} else {
		formattedRecipeList = recipeList.map((item) => (
			<RecipesListItem isLoading={false} key={item.id} {...item} />
		));
	}

	return (
		<div className={`recipes-list ${isLoading && 'loading'}`}>
			{!isBeginning && formattedRecipeList}
		</div>
	);
}

export default RecipesList;
