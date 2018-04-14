import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className="mb4 mw6 center">
			<input
				className="w-100 pa1 ba b--yellow yellow bg-dark-blue"
				type="search"
				placeholder="Search games"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;