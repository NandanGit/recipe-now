import React from 'react';

import Card from '../../UI/Card';
import Badge from '../../UI/Badge';
import FoodTypeMark from './FoodTypeMark';
import './RecipeListItem.css';

function RecipeListItem(props) {
	const {
		imgUrl: itemImgUrl,
		foodType: itemFoodType,
		labels: itemLabels,
	} = props;

	let recipeTags = [];
	if (itemLabels) {
		recipeTags = itemLabels.map((label) => <Badge>{label}</Badge>);
	}
	return (
		<Card className="recipe-list-item">
			<div
				className="recipe-list-item__img"
				style={{ backgroundImage: `url(${itemImgUrl})` }}
			></div>
			<div className="recipe-list-item-details">
				<p className="recipe-list-item__title">
					Tomato Salad Grilled Pizza
				</p>
				{recipeTags.length !== 0 && (
					<div className="recipe-list-item__tags-container">
						{recipeTags}
					</div>
				)}
			</div>
			<FoodTypeMark foodType={itemFoodType} />
		</Card>
	);
}

export default RecipeListItem;
