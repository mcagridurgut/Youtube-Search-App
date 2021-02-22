import React from 'react';
import './Styles/styles.css';
import SearchBar from './Components/Bar';
import api from './Connection/api';
import VideoPlayer from './Components/VideoPlayer';
import VideoList from './Components/VideoList';
import { Helmet } from 'react-helmet';

const TITLE = 'My Pages Title';
class App extends React.Component {
	state = {
		videos: [],
		selectedID: null,
		selectedTitle: null,
		videoDesc: null
	};

	onVideoSelected = (videoID, videoTitle, videoDesc) => {
		this.setState({ selectedID: videoID, selectedTitle: videoTitle, videoDesc: videoDesc });
	};
	onSearch = async (keyword) => {
		const response = await api.get('/search', {
			params: {
				q: keyword
			}
		});
		console.log(response.data.items);
		if (response.data.items.length != 0)
			this.setState({
				videos: response.data.items,
				selectedID: response.data.items[0].id.videoId,
				selectedTitle: response.data.items[0].snippet.title,
				videoDesc: response.data.items[0].snippet.description
			});
	};

	render() {
		return (
			<div>
				<Helmet>
					<title>{this.state.selectedTitle}</title>
				</Helmet>
				<div className="App">
					<SearchBar onSearch={this.onSearch} />
					<VideoList onVideoSelected={this.onVideoSelected} data={this.state.videos} />
					<VideoPlayer
						videoId={this.state.selectedID}
						videoTitle={this.state.selectedTitle}
						videoDesc={this.state.videoDesc}
					/>
				</div>
			</div>
		);
	}
}
export default App;
