import axios from 'axios';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		kind: 'youtube#video',
		part: 'snippet',
		maxResults: 15,
		key: 'AIzaSyAeNHN86FLugdkdwmsDYciNtaoAreV_scY' // plug your API key here, mine is only accepting requests from my IP adress
	},
	headers: {}
});
