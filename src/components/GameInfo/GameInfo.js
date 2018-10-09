import React from 'react';
import './GameInfo.css';

const GameInfo = ({ appid, time, time2W, name, logo, stats, profile }) => {
	let playtime = `Playtime total: ${time >= 60 ? ((Math.floor(time / 60)) + " h") : (time + " m")}`;
	if (time2W > 0) {
		playtime += `, last 2 weeks: ${time2W >= 60 ? ((Math.floor(time2W / 60)) + " h")	: (time2W + " m")}`;
	}

	return (
		<div className="w-third-l w-50-m w-100 pa2 ba b--yellow">
			<img
				src={`http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${logo}.jpg`}
				alt={name}
				className="mw-100"
			/>
			<h2 className="f3 yellow truncate" title={name}>{name}</h2>
			<p className="yellow truncate" title={playtime}>{playtime}</p>
			{
				stats &&
				  <span>
						<a target="_blank" rel="noopener noreferrer" className="gold"
						href={`http://steamcommunity.com/profiles/${profile}/stats/${appid}`}>
							View stats
						</a>
						<span className="yellow"> | </span>
					</span>
			}
			<a href={`http://store.steampowered.com/app/${appid}`}
			target="_blank" rel="noopener noreferrer" className="gold">
				Open in Steam Store
			</a>
		</div>
	);
}

export default GameInfo;
