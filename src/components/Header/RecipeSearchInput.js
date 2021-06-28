import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import credentials from '../../api_credentials/credentials';
import { fetchRecipes } from '../../store/actions/thunks/recipes-thunks';
import { recipesActions } from '../../store/recipes-slice';
import { UIActions } from '../../store/ui-slice';

import './RecipeSearchInput.css';

function RecipeSearchInput(props) {
	const fire = useDispatch();
	const inputRef = useRef();

	const searchHandler = async (event) => {
		event.preventDefault();

		fire(recipesActions.updateCurrentPage(0));
		fire(recipesActions.clearRawData());

		const targetURL = credentials.URL;
		const searchTerm = inputRef.current.value.trim();

		fire(UIActions.updateBeginningState());
		fire(recipesActions.updateCurrentPage({ newPage: 1 }));
		await fire(fetchRecipes(`${targetURL}&q=${searchTerm}`));

		fire(recipesActions.updateFormattedRecipesList());
		// setTimeout(() => {
		// 	// setIsLoading(false);
		// 	fire(UIActions.setRecipeLoadingState({ isLoading: false }));
		// }, 3000);
	};

	return (
		<form onSubmit={searchHandler}>
			<input
				ref={inputRef}
				type="text"
				className="search-input"
				placeholder="Search..."
			/>
			<button className="search-input-btn" type="submit">
				<i className="fa fa-search"></i>
			</button>
		</form>
	);
}

export default RecipeSearchInput;
