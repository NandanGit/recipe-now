import React, { Fragment } from 'react';

import Card from '../../UI/Card';
import Badge from '../../UI/Badge';
import FoodTypeMark from './FoodTypeMark';
import './RecipeListItem.css';

function RecipeListItem(props) {
	const {
		imgUrl: itemImgUrl,
		foodType: itemFoodType,
		labels: itemLabels,
		isLoading: itemIsLoading,
		name: recipeName,
	} = props;

	let recipeTags = [];
	if (itemLabels) {
		recipeTags = itemLabels.map((label) => (
			<Badge key={label + Math.random()} className="recipe-tag">
				{label}
			</Badge>
		));
	}
	return (
		<Card className="recipe-list-item">
			<div
				className={`loader ${
					!itemIsLoading ? 'recipe-list-item__img' : 'img_loader'
				}`}
				style={
					!itemIsLoading
						? { backgroundImage: `url(${itemImgUrl})` }
						: {}
				}
			></div>
			<div className="recipe-list-item-details">
				{itemIsLoading ? (
					<Fragment>
						<div className="loader recipe-name-loader"></div>
						<div className="recipe-list-item__tags-container">
							<div className="loader recipe-tag-loader tag-1"></div>
							<div className="loader recipe-tag-loader tag-2"></div>
							<div className="loader recipe-tag-loader tag-3"></div>
						</div>
					</Fragment>
				) : (
					<Fragment>
						<p className="recipe-list-item__title">{recipeName}</p>
						{recipeTags.length !== 0 && (
							<div className="recipe-list-item__tags-container">
								{recipeTags}
							</div>
						)}
					</Fragment>
				)}
			</div>
			<FoodTypeMark
				className="loader"
				foodType={!itemIsLoading ? itemFoodType : 'loading'}
			/>
		</Card>
	);
}

export default RecipeListItem;
