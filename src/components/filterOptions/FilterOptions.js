import React from 'react';
import c from './filterOptions.scss';

const FilterOptions = (props) => {
	let reset = '';

	if (props.ordered) reset = (<div onClick={props.removeFilters}>Reset</div>);

		return (
			<div>
				<h3>Sort products</h3>
				{ reset }

				<div className={c.options}>	
					<div>
						<div className={c.optionButton} onClick={(e) => props.orderByPrice('asc')}>
							Price (low to high)
						</div>
						<div className={c.optionButton} onClick={(e) => props.orderByPrice('desc')}>
							Price (high to low)
						</div>
					</div>

					<div>
						<div className={c.optionButton} onClick={(e) => props.orderBySize('asc')}>
							Size (small to large)
						</div>
						<div className={c.optionButton} onClick={(e) => props.orderBySize('desc')}>
							Size (large to small)
						</div>
					</div>

					<div>
						<div className={c.optionButton} onClick={(e) => props.orderByRating('desc')}>
							Rating (high to low)
						</div>
						<div className={c.optionButton} onClick={(e) => props.orderByRating('asc')}>
							Rating (low to high)
						</div>
					</div>
				</div>
			</div>
			)
	}

	export default FilterOptions;