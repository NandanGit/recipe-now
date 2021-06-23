import React from 'react';

import './Card.css';

function Card(props) {
	const isPadding = props.padding;
	return (
		<div
			className={`card ${props.className} ${isPadding && 'with-padding'}`}
		>
			{props.children}
		</div>
	);
}

export default Card;
