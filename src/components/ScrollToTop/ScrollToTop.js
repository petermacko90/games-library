import React from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
	return (
		<div
			className="scroll fixed bg-navy br-100 pointer"
			title="To top"
			onClick={() => window.scrollTo(0,0)}>
			<div className="relative" />
		</div>
	);
}

export default ScrollToTop;