import React from 'react';

import './RecipeSearchInput.css';

function RecipeSearchInput(props) {
	return (
		<form>
			<input
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
