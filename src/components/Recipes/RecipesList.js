import React from 'react';

import RecipesListItem from './RecipeListItem/RecipeListItem';

import './RecipesList.css';

const DUMMY_FOOD_ITEMS = [
	{
		id: 0,
		imgUrl: 'https://www.edamam.com/web-img/28a/28ac183a985155b5593483a198acf16f.png',
		foodType: 'veg',
		labels: ['Indian', '10 min', 'Balanced', 'Protein Rich'],
	},
	{
		id: 1,
		imgUrl: 'https://www.edamam.com/web-img/80a/80a19d1ad6a0c42e0422e380ef9e194c.jpg',
		foodType: 'non-veg',
		labels: ['Italian', '60 min', 'High Carbs'],
	},
	{
		id: 2,
		imgUrl: 'https://www.edamam.com/web-img/855/85556f2d7a304d97c6767e4600c588d4.jpg',
		foodType: 'non-veg',
		labels: ['Gluten free', 'Sodium', 'Iron'],
	},
	{
		id: 3,
		imgUrl: 'https://www.edamam.com/web-img/52e/52ebe8eb9f3fb204c6fd12403d3ed09e.jpg',
		foodType: 'egg',
		labels: ['Spicy', '10 min', 'Balanced', 'Protein Rich'],
	},
	{
		id: 4,
		imgUrl: 'https://www.edamam.com/web-img/b7e/b7ef79d492fd308c920a9f5b2f4ab064.jpg',
		foodType: 'egg',
		labels: ['Organic', '10 min', 'No preservatives', 'Protein Rich'],
	},
	{
		id: 5,
		imgUrl: 'https://www.edamam.com/web-img/36c/36cb2c544928c75d950c08d62e9f7e56.jpg',
		foodType: 'veg',
		labels: ['Indian', '10 min', 'Balanced', 'Protein Rich'],
	},
];

function RecipesList(props) {
	const formattedRecipeList = DUMMY_FOOD_ITEMS.map((item) => (
		<RecipesListItem key={item.id} {...item} />
	));
	return <div className="recipes-list">{formattedRecipeList}</div>;
}

export default RecipesList;
