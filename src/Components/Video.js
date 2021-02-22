import React from 'react';
import '../Styles/video.css';
function selectVideo(id, title, desc, onVideoSelected) {
	onVideoSelected(id.videoId, title, desc);
}
function constructVideoTitles(videoData, onVideoSelected) {
	return videoData.map(({ snippet, id }, index) => {
		return (
			<div className="video" key={index}>
				<div
					className="video-container"
					key={index}
					onClick={() => selectVideo(id, snippet.title, snippet.description, onVideoSelected)}
				>
					<img src={snippet.thumbnails.high.url} alt={snippet.title} />
					<div>
						<p className="thumbnail-title">{snippet.title}</p>
					</div>
				</div>
			</div>
		);
	});
}
const Video = ({ data, onVideoSelected }) => {
	return constructVideoTitles(data, onVideoSelected);
};

export default Video;
