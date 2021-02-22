import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class Bar extends React.Component {
	state = { title: '' };
	onSearchChanged = (event) => {
		const _title = event.target.value;
		this.setState({ title: _title });
	};
	onSubmit = (event) => {
		event.preventDefault();
		this.props.onSearch(this.state.title);
	};
	render() {
		return (
			<form onSubmit={this.onSubmit} className="search-form" autoComplete="off">
				<div className="form-controls">
					<div className="container">
						<img src="https://image.flaticon.com/icons/png/128/1383/1383260.png" />
					</div>
					<input
						id="video-search"
						type="text"
						value={this.state.title}
						onChange={this.onSearchChanged}
						placeholder="Enter Search Keyword"
					/>
					<IconButton id="IconButton" type="submit">
						<SearchIcon className="SearchIcon" />
					</IconButton>
				</div>
			</form>
		);
	}
}

export default Bar;
