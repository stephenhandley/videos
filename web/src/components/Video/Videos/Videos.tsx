import { Link, routes } from '@redwoodjs/router'

import VideoThumbnail from 'src/components/VideoThumbnail'

const VideosList = ({ videos }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {videos.map((video) => (
        <div key={video.id}>
          <Link to={routes.video({ id: video.id })}>
            <VideoThumbnail video={video} />
            <div>{video.title}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default VideosList
