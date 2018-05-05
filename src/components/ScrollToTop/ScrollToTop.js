import React from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
	return (
		<i
			className="fa fa-chevron-circle-up fa-5x scroll fixed bottom-2-l right-2-l bottom-1-m right-1-m bottom-0 right-0 gold pointer"
			title="To top"
			onClick={() => window.scrollTo(0,0)}
		/>
	);
}

export default ScrollToTop;