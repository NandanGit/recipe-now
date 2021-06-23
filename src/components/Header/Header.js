import React from 'react';

import RecipeSearchInput from './RecipeSearchInput';
import './Header.css';

function Header(props) {
	return (
		<header className="header">
			<h1 className="title">Recipe Now</h1>
			<RecipeSearchInput />
		</header>
	);
}

export default Header;
