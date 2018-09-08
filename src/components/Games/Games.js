import React from 'react';
import GameInfo from '../GameInfo/GameInfo';
import SortSelect from '../SortSelect/SortSelect';
import SearchBox from '../SearchBox/SearchBox';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';

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
		this.props.resetPage();
	}

	onFilterChange = (event) => {
		this.setState({filter: {
			playedLastTwoWeeks: event.target.checked
		}});
		this.props.resetPage();
	}

	render() {
		const { orderBy, searchField, filter } = this.state;
		const { games, page } = this.props;
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

		const GAMES_PER_PAGE = 30;
		let paginatedGames = [];
		let pageCount = Math.ceil(orderedGames.length / GAMES_PER_PAGE);

		for (let i = 0; i < pageCount; i++) {
			paginatedGames[i] = orderedGames.slice(i * GAMES_PER_PAGE, i * GAMES_PER_PAGE + GAMES_PER_PAGE);
		}

		return (
			<div className="mh6-l mh4-m mh0 mb4">
				<p className="tc yellow">Game count: {orderedGames.length}</p>
				<SearchBox searchChange={this.onSearchChange} value={searchField} />
				<SortSelect orderChange={this.onOrderChange} orderBy={orderBy} />
				<Filters filterChange={this.onFilterChange} filter={filter} />
				<div className="flex flex-wrap justify-center">
					{	
						paginatedGames[page] ?
							paginatedGames[page].map((game) => {
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
						:
							<p className="gold f3">No games found</p>
					}
				</div>
				{
					orderedGames.length > 0 &&
						<Pagination
							pageCount={pageCount}
							activePage={page}
							changePage={this.props.changePage}
						/>
				}
			</div>
		);
	}
}

export default Games;