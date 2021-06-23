import React from 'react';

import './FoodTypeMark.css';

function FoodTypeMark(props) {
	return (
		<div className={`food-type-mark ${props.foodType}`}>
			<div className="inner-circle"></div>
		</div>
	);
}

export default FoodTypeMark;
