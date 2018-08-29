import React from 'react';
import ListingCard from '../listingCard/ListingCard';
import c from './listings.scss';
import mainC from '../../containers/main/main.scss';
import FilterOptions from '../filterOptions/FilterOptions';

const Listings = (props) => {
	let items = 'Loading items';

	if (props.items.length > 0) {
		items = props.items.map(item => {
			return <ListingCard
							key={item.sku}
							title={item.beer}
							subtitle={item.brewery}
							stock={item.quantity_in_stock}
							link={item.url}
							price={item.price}
							rating={item.average_review_rating_0_to_5}
							size={item.size}
							image={item.image_url}
							ordered={props.ordered} />
		});
	}

	return (
		<div className={mainC.container}>
			<FilterOptions
			ordered={props.ordered}
			orderByPrice={props.orderByPrice}
			orderBySize={props.orderBySize}
			orderByRating={props.orderByRating}
			/>

			<div className={c.listingCards}>	
				{ items }
			</div>
		</div>
	)
}

export default Listings;