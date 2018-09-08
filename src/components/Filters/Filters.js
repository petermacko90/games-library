import React from 'react';

const Filters = ({ filterChange, filter }) => {
	return (
		<div className="mw6 mb4 center">
			<input
				id="playedLastTwoWeeks"
				type="checkbox"
				onChange={filterChange}
				checked={filter.playedLastTwoWeeks}
			/>
			<label
				htmlFor="playedLastTwoWeeks"
				className="yellow"> Played last 2 weeks
			</label>
		</div>
	);
}

export default Filters;