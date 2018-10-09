import React from 'react';
import './Pagination.css';

const Pagination = ({ pageCount, activePage, changePage }) => {
	let options = [];
	for (let i = 0; i < pageCount; i++) {
		options.push(<option key={i} value={i}>{'Page ' + (i + 1)}</option>);
	}

	return (
		<select id="pagination" onChange={changePage} value={activePage}
		className="yellow bg-navy b--none mt4 center db">
			{	options }
		</select>
	);
}

export default Pagination;
