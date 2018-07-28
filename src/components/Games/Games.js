import React from 'react';
import GameInfo from '../GameInfo/GameInfo';
import SortSelect from '../SortSelect/SortSelect';
import SearchBox from '../SearchBox/SearchBox';
import Filters from '../Filters/Filters';

class Games extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderBy: 'name',
			searchField: '',
			filter: {
				playedLastTwoWeeks: false
			}
		}
	}

	orderGamesByName = (games, order = "asc") => {
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
		return games;
	}

	orderGamesByPlaytime = (games, order = "desc") => {
		games.sort((a, b) => {
			if (order === "desc") {
				return b.playtime_forever - a.playtime_forever;
			} else if (order === "asc") {
				return a.playtime_forever - b.playtime_forever;
			}
			return 0;
		});
		return games;
	}

	filterGames = (games, searchField, filter) => {
		games = games.filter(game => {
			return game.name.toLowerCase().includes(searchField.toLowerCase());
		});
		if (filter.playedLastTwoWeeks && games.length) {
			games = games.filter(game => game.playtime_2weeks > 0);
		}
		return games;
	}

	onOrderChange = (event) => {
		this.setState({orderBy: event.target.value});
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}

	onFilterChange = (event) => {
		this.setState({filter: {
			playedLastTwoWeeks: event.target.checked
		}});
	}

	render() {
		const { orderBy, searchField, filter } = this.state;
		const { games } = this.props;
		const filteredGames = this.filterGames(games, searchField, filter);
		let orderedGames = [];

		if (filteredGames.length) {
			switch (orderBy) {
				case "name":
					orderedGames = this.orderGamesByName(filteredGames);
					break;
				case "nameDesc":
					orderedGames = this.orderGamesByName(filteredGames, "desc");
					break;
				case "playtimeDesc":
					orderedGames = this.orderGamesByPlaytime(filteredGames);
					break;
				case "playtime":
					orderedGames = this.orderGamesByPlaytime(filteredGames, "asc");
					break;
				default:
					orderedGames = this.orderGamesByName(filteredGames);
			}
		}

		return (
			<div className="mh6-l mh4-m mh0 mb4">
				<p className="tc yellow">Game count: {orderedGames.length}</p>
				<SortSelect orderChange={this.onOrderChange} />
				<SearchBox searchChange={this.onSearchChange} />
				<Filters filterChange={this.onFilterChange} />
				<div className="flex flex-wrap justify-center">
					{
						orderedGames.map((game) => {
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
			</div>
		);
	}
}

export default Games;