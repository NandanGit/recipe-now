import React from 'react';

import './Badge.css';

function Badge(props) {
	return <div className={`badge ${props.className}`}>{props.children}</div>;
}

export default Badge;
