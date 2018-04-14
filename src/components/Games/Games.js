import React from 'react';
import GameInfo from '../GameInfo/GameInfo';
import SortSelect from '../SortSelect/SortSelect';
import SearchBox from '../SearchBox/SearchBox';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

class Games extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderBy: 'name',
			searchField: ''
		}
	}

	orderGamesByName = (order = "asc") => {
		const { games } = this.props;
		games.sort((a, b) => {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (order === "asc") {
				if (nameA < nameB) { return -1; }
				if (nameA > nameB) { return 1; }
			} else if (order === "desc") {
				if (nameA > nameB) { return -1; }
				if (nameA < nameB) { return 1; }
			}
			return 0;
		});
	}

	orderGamesByPlaytime = (order = "desc") => {
		const { games } = this.props;
		games.sort((a, b) => {
			if (order === "desc") {
				return b.playtime_forever - a.playtime_forever;
			} else if (order === "asc") {
				return a.playtime_forever - b.playtime_forever;
			}
			return 0;
		});
	}

	onOrderChange = (event) => {
		this.setState({ orderBy: event.target.value });
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const { orderBy, searchField } = this.state;
		const { games } = this.props;

		switch (orderBy) {
			case "name":
				this.orderGamesByName();
				break;
			case "nameDesc":
				this.orderGamesByName("desc");
				break;
			case "playtimeDesc":
				this.orderGamesByPlaytime();
				break;
			case "playtime":
				this.orderGamesByPlaytime("asc");
				break;
			default:
				this.orderGamesByName();
		}

		const filteredGames = games.filter(game => {
			return game.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className="mh6-l mh4-m mh0 mb4">
				<p className="tc yellow">Game count: {filteredGames.length}</p>
				<SortSelect orderChange={this.onOrderChange} />
				<SearchBox searchChange={this.onSearchChange} />
				<div className="flex flex-wrap justify-center">
					{
						filteredGames.map((game) => {
			  			return (
			  				<GameInfo
			    				key={game.appid}
			    				appid={game.appid}
			    				time={game.playtime_forever}
			    				time2W={game.playtime_2weeks}
			    				name={game.name}
			    				logo={game.img_logo_url}
			    				stats={game.has_community_visible_stats}
			    				profile={this.props.profile}
			  				/>
			  			);
						})
					}
				</div>
				<ScrollToTop />
			</div>
		);
	}
}

export default Games;