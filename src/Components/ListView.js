import React from 'react';

import Video from './Video';

const ListView = ({ data, onVideoSelected }) => {
	return (
		<div className="video-list">
			<div>
				<Video data={data} onVideoSelected={onVideoSelected} />
			</div>
		</div>
	);
};

export default ListView;
