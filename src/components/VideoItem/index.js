import {Link} from 'react-router-dom'

// import {BsDot} from 'react-icons/bs'
// import {GoDotFill} from 'react-icons/go'

// import moment from 'moment'

import {
  VideoCard,
  VideoThumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoDetailsTextContainer,
  VideoTitle,
  ChannelName,
  ViewsText,
  ViewsAndPublished,
} from './VideoItem'
import AllContext from '../../context/AllContext'

const VideoItem = props => {
  const {item} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item
  return (
    <AllContext.Consumer>
      {values => {
        const {lightTheme} = values
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <VideoCard>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <VideoDetailsTextContainer>
                  <VideoTitle>{title}</VideoTitle>
                  <ChannelName theme={lightTheme}>{channel.name}</ChannelName>
                  <ViewsAndPublished>
                    <ViewsText theme={lightTheme}>{viewCount} Views </ViewsText>
                    {/* <ViewsText>
                <BsDot size={25} />
              </ViewsText>{' '} */}
                    <ViewsText theme={lightTheme}>{publishedAt}</ViewsText>
                  </ViewsAndPublished>
                </VideoDetailsTextContainer>
              </VideoDetailsContainer>
            </VideoCard>
          </Link>
        )
      }}
    </AllContext.Consumer>
  )
}
export default VideoItem
