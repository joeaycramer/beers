import React from 'react';
import c from './main.scss';
import Listings from '../../components/listings/Listings'; 
import ListingsHeader from '../../components/listingsHeader/ListingsHeader'; 

const Main = (props) => {
	return (
		<main className={c.main}>
			<ListingsHeader
			listingTitle={props.listingTitle}
			listingSubtitle={props.listingSubtitle}
			/>

			<Listings
			items={props.items}
			ordered={props.ordered}
			orderByPrice={props.orderByPrice}
			orderBySize={props.orderBySize}
			orderByRating={props.orderByRating}
			/>
		</main>
	)
}

export default Main;