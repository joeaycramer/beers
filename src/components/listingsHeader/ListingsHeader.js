import React from 'react';
import c from './listingsHeader.scss';

const ListingsHeader = (props) => {
	return (
	<div className={c.header}>
		<p className={c.headerSubtitle}>
			{props.listingSubtitle}
		</p>

		<h1 className={c.headerTitle}>
		{props.listingTitle}
		</h1>
	</div>
	)
}

export default ListingsHeader;