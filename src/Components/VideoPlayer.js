import React from 'react';

const VideoPlayer = ({ videoId, videoTitle, videoDesc }) => {
	if (!videoId) {
		return (
			<p style={{ textAlign: 'center', color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
				WELCOME!, PLEASE SEARCH A VIDEO
			</p>
		);
	}
	return (
		<div className="video-player">
			<div class="videoWrapper">
				<iframe
					title={videoId}
					className="video-iframe"
					src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
					frameBorder="0"
					allow="fullscreen"
				/>
			</div>
			<p className="title">{videoTitle}</p>
			<p className="description">{videoDesc}</p>
		</div>
	);
};

export default VideoPlayer;
