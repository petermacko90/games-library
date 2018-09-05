import React from 'react';
import './Notification.css';

const Notification = ({ onClick, text }) => {
	return (
		<div
			className='notification bg-red fixed pointer dim noselect'
			title='Dismiss'
			onClick={onClick}>
			{text}
		</div>
	);
}

export default Notification;