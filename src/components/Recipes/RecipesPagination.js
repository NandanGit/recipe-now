import React from 'react';

import './RecipesPagination.css';
import Badge from '../UI/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { recipesActions } from '../../store/recipes-slice';
import { fetchRecipes } from '../../store/actions/thunks/recipes-thunks';

function RecipesPagination(props) {
	const fire = useDispatch();

	const { currentPage, totalPages, nextPageLink } = useSelector(
		(state) => state.recipes
	);
	const isFirstPage = currentPage === 1;

	// fire(recipesActions.updateNextPage());

	const nextPageHandler = async () => {
		if (currentPage >= totalPages) {
			await fire(fetchRecipes(nextPageLink));
		}
		fire(recipesActions.updateCurrentPage({ newPage: currentPage + 1 }));
	};

	const prevPageHandler = () => {
		if (currentPage === 1) {
			return console.log('Invalid request');
		}
		fire(recipesActions.updateCurrentPage({ newPage: currentPage - 1 }));
	};

	return (
		<div className="recipes-pagination">
			<button
				onClick={prevPageHandler}
				disabled={isFirstPage}
				className="pagination-button badge"
			>
				Prev
			</button>
			<Badge>Page {currentPage}</Badge>
			<button
				onClick={nextPageHandler}
				disabled={!nextPageLink}
				className="pagination-button badge"
			>
				Next
			</button>
		</div>
	);
}

export default RecipesPagination;
