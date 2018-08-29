import React from 'react';
import Main from '../main/Main';

const Layout = (props) => {
	return (
		<div>
			<header></header>

			<Main
			listingTitle={props.listingTitle}
			listingSubtitle={props.listingSubtitle}
			items={props.items}
			ordered={props.ordered}
			orderByPrice={props.orderByPrice}
			orderBySize={props.orderBySize}
			orderByRating={props.orderByRating}
			/>

			<footer></footer>
		</div>
	)
}

export default Layout;