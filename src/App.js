import { Fragment } from 'react';

import Header from './components/Header/Header';
import RecipesList from './components/Recipes/RecipesList';

function App() {
	return (
		<Fragment>
			<Header />
			<RecipesList />
		</Fragment>
	);
}

export default App;
