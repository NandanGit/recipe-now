import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import RecipesListItem from './RecipeListItem/RecipeListItem';
import RecipesPagination from './RecipesPagination';

import './RecipesList.css';
import { toTitle } from '../../utils';

function RecipesList(props) {
	const recipeList = useSelector(
		(state) => state.recipes.formattedRecipesList
	);
	const searchQuery = useSelector((state) => state.recipes.searchQuery);
	const isLoading = useSelector((state) => state.UI.isRecipesLoading);

	// const isFirstPage = fire(recipesActions.getIsFirstPage());

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
		<Fragment>
			{searchQuery && (
				<center>
					{isLoading ? (
						<h1 className={isLoading && 'dot-loading'}>
							Searching for {toTitle(searchQuery)}
						</h1>
					) : (
						<h1>Results for {toTitle(searchQuery)}</h1>
					)}
				</center>
			)}

			<div className={`recipes-list ${isLoading && 'loading'}`}>
				{searchQuery && formattedRecipeList}
			</div>
			{searchQuery && <RecipesPagination />}
		</Fragment>
	);
}

export default RecipesList;
