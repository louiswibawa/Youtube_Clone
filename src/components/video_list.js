import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => { // for every elem of props.videos, we call a function with a single video
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} 
			/> // call the VideoListItem with param video, since function receives props, we have to call it with curly braces	
		);
	});

	return (
		// react knows that videoItems is an array/list of components and it will render all of them
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;