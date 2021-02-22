import React from 'react';

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
			<form onSubmit={this.onSubmit} className="search-form" autocomplete="off">
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
					<button id="video-search-button" type="submit">
						<i class="fa fa-search" />
					</button>
				</div>
			</form>
		);
	}
}

export default Bar;
