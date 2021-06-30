import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import credentials from '../../api_credentials/credentials';
import { fetchRecipes } from '../../store/actions/thunks/recipes-thunks';
import { recipesActions } from '../../store/recipes-slice';

import './RecipeSearchInput.css';

function RecipeSearchInput(props) {
	const fire = useDispatch();
	const inputRef = useRef();

	const searchHandler = async (event) => {
		event.preventDefault();

		const targetURL = credentials.URL;
		const searchTerm = inputRef.current.value.trim();

		inputRef.current.value = '';

		if (!searchTerm) {
			return console.log('Enter a valid query');
		}

		// Clear recipe state first, for new search query
		fire(recipesActions.resetRecipesState());

		// Update search query
		fire(recipesActions.updateSearchQuery({ searchQuery: searchTerm }));

		// Fetch the query result (first page)
		await fire(fetchRecipes(`${targetURL}&q=${searchTerm}`));

		// Finally update the current page to show the correct recipes
		fire(recipesActions.updateCurrentPage({ newPage: 1 }));
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
