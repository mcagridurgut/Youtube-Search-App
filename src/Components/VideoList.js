import React from 'react';

import Video from './Video';

const VideoList = ({ data, onVideoSelected }) => {
	return (
		<div className="video-list">
			<div>
				<Video data={data} onVideoSelected={onVideoSelected} />
			</div>
		</div>
	);
};

export default VideoList;
