import React, { Component } from 'react';
import Layout from './containers/layout/Layout';
import Main from './containers/main/Main';
import axios from 'axios';

class App extends Component {
	state = {
		items: [],
		ordered: false,
		listingTitle: 'Our beers',
		listingSubtitle: 'Check out a selection of the best beers in London',
	}



	componentWillMount = () => {
		if (!this.state.items.length) {
			this.getItems();
		}
	}



	// Get the items
	getItems = () => {
		axios.get('http://demo8465751.mockable.io/products').then(items => {
			this.setState({
				items: items.data
			});
		});
	}



	// Sorting first by size, then by name
	// in both directions
	orderBySize = (direction) => {
		let items = [...this.state.items];
		
		if (direction == 'asc') {

			items.sort(function (a, b) {
				if (a.size < b.size) {
					return -1
				} else if (a.size > b.size) {
					return 1
				}

				if (a.sku < b.sku) {
					return -1
				} else if (a.sku > b.sku) {
					return 1
				}
			});

		} else if (direction == 'desc') {

			items.sort(function (a, b) {
				if (a.size > b.size) {
					return -1
				} else if (a.size < b.size) {
					return 1
				}

				if (a.sku < b.sku) {
					return -1
				} else if (a.sku > b.sku) {
					return 1
				}
			});
		}

		this.setState({
			items: items,
			ordered: true
		});
	}



	// Sorting first by price, then by name
	// in both directions
	orderByPrice = (direction) => {
		let items = [...this.state.items];
		
		if (direction == 'asc') {

			items.sort(function (a, b) {
				console.log(a.price.substr(1));
				if (Number(a.price.substr(1)) < Number(b.price.substr(1))) {
					return -1;
				} else if (Number(a.price.substr(1)) > Number(b.price.substr(1))) {
					return 1;
				}

				if (a.sku < b.sku) {
					return -1
				} else if (a.sku > b.sku) {
					return 1
				}
			});

		} else if (direction == 'desc') {

			items.sort(function (a, b) {
				if (Number(a.price.substr(1)) > Number(b.price.substr(1))) {
					return -1
				} else if (Number(a.price.substr(1)) < (b.price.substr(1))) {
					return 1
				}

				if (a.sku < b.sku) {
					return -1
				} else if (a.sku > b.sku) {
					return 1
				}
			});
		}

		this.setState({
			items: items,
			ordered: true
		});
	}



	// Sorting first by rating, then by name
	// in both directions
	orderByRating = (direction) => {
		let items = [...this.state.items];
		
		if (direction == 'asc') {

			items.sort(function (a, b) {
				if (a.average_review_rating_0_to_5 < b.average_review_rating_0_to_5) {
					return -1
				} else if (a.average_review_rating_0_to_5 > b.average_review_rating_0_to_5) {
					return 1
				}

				if (a.sku < b.sku) {
					return -1
				} else if (a.sku > b.sku) {
					return 1
				}
			});

		} else if (direction == 'desc') {

			items.sort(function (a, b) {
				if (a.average_review_rating_0_to_5 > b.average_review_rating_0_to_5) {
					return -1
				} else if (a.average_review_rating_0_to_5 < b.average_review_rating_0_to_5) {
					return 1
				}

				if (a.sku < b.sku) {
					return -1
				} else if (a.sku > b.sku) {
					return 1
				}
			});
		}

		this.setState({
			items: items,
			ordered: true
		});
	}



	// Sorting first by size, then by name
	// in both directions
	removeFilter = () => {
		// TODO: 
		console.log('No time :(');
		this.setState({
			ordered: false
		});
	}



	render() {
		return (
			<Layout
			listingTitle={this.state.listingTitle}
			listingSubtitle={this.state.listingSubtitle}
			items={this.state.items}
			ordered={this.state.ordered}
			orderByPrice={this.orderByPrice}
			orderBySize={this.orderBySize}
			orderByRating={this.orderByRating}
			/>
			);
	}
}

export default App;
