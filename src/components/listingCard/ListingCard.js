import React from 'react';
import c from './listingCard.scss';

const ListingCard = (props) => {
	let rating = null;
	let low_stock = null;

	if (props.stock >= 5) {
		low_stock = (
			<div className={c.cardLowStock}>
			<span className="icon-hourglass"></span> Low stock!
			</div>
		);
	}

	if (props.rating >= 4 || props.ordered === true) {
		rating = (
			<div className={c.cardRating}>
			{props.rating} <span className="icon-star"></span>
			</div>
		)
	}

	return (
		<div className={c.card}>
			<a href={props.link}>
				<div className={c.cardImage} style={{backgroundImage: `url(${props.image})` }}>
					<div className={c.cardAlcoholPercent}>{props.alcohol}</div>
					{rating}
					
					<div className={c.cardPrice}>{props.price}</div>
				</div>

				
				<div className={c.cardInfo}>
					<div className={c.cardTitle}>{props.title}</div>
					<div className={c.cardBrewery}>from {props.subtitle}</div>
					{low_stock}
					
					<span className={c.clickToView}>
						Click to view
					</span>
				</div>
			</a>
		</div>
	)
}

export default ListingCard;