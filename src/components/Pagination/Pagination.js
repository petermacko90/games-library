import React from 'react';
import './Pagination.css';

const Pagination = ({ pageCount, activePage, changePage }) => {
	let pages = [];

	for (let i = 0; i < pageCount; i++) {
		let colors = (i === activePage) ? 'gold bg-navy' : 'yellow';
		pages.push(
			<div className={"dib mh1 pa2 pointer noselect " + colors} key={i}
			onClick={changePage(i)} title={"Go to page " + (i + 1)}>
				{i + 1}
			</div>
		);
	}
	return <div className="tc mt4">{pages}</div>;
}

export default Pagination;