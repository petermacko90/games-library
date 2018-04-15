import React from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
	return (
		<div
			className="scroll fixed bottom-2-l right-2-l bottom-1-m right-1m bottom-0 right-0 bg-navy br-100 pointer"
			title="To top"
			onClick={() => window.scrollTo(0,0)}>
			<div className="relative" />
		</div>
	);
}

export default ScrollToTop;