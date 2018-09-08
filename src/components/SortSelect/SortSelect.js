import React from 'react';

const SortSelect = ({ orderChange, orderBy }) => {
	return (
		<div className="mw6 mb4 center">
		  <label htmlFor="order" className="dib yellow w-30-ns w-100">
		  	Order by:
		  </label>
			<select onChange={orderChange} id="order" value={orderBy}
			className="yellow bg-navy b--none w-70-ns w-100">
				<option value="name">Name ascending</option>
				<option value="nameDesc">Name descending</option>
				<option value="playtimeDesc">Playtime descending</option>
				<option value="playtime">Playtime ascending</option>
			</select>
		</div>
	);
}

export default SortSelect;