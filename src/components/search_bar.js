import React, { Component } from 'react'; // { Component } is basically taking the React.Component and call it Component

/* functional component - 1 function goes in and jsx file comes out */
// const SearchBar = () => {
// 	return <input />;	// React.createElement
// };

/* class component - a component which has some type of internal record keeping. an ability of knowing what has happened to itself since being rendered */
class SearchBar extends Component { // giving all functionalities from React.component
	constructor(props) { // this is how we initialize state in a class-based component
		super(props); // calls Component's constructor with props
		this.state = {term: ''}; // term here refers to search term
	}
	// render() is a must and only way to define a function in a class-based component
	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}/>
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;