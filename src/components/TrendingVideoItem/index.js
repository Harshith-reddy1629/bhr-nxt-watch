import {Link} from 'react-router-dom'

// import moment from 'moment'

// import {BsDot} from 'react-icons/bs'

import {
  TrendingVideoCard,
  TrendingVideoThumbnail,
  TrendingVideoDetailsContainer,
  //   TrendingChannelLogo,
  TrendingVideoDetailsTextContainer,
  TrendingVideoTitle,
  TrendingChannelName,
  TrendingViewsText,
  TrendingViewsAndPublished,
} from './TrendingVideoitem'

import './index.css'

const TrendingVideoitem = props => {
  const {item} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item
  return (
    <Link to={`/videos/${id}`} className="trending-link-item">
      <TrendingVideoCard>
        <TrendingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <TrendingVideoDetailsContainer>
          {/* <TrendingChannelLogo
            src={channel.profileImageUrl}
            alt="channel logo"
          /> */}
          <TrendingVideoDetailsTextContainer>
            <TrendingVideoTitle>{title}</TrendingVideoTitle>
            <TrendingChannelName>{channel.name}</TrendingChannelName>
            <TrendingViewsAndPublished>
              <TrendingViewsText>{viewCount} Views </TrendingViewsText>
              {/* <ViewsText>
                <BsDot />
              </ViewsText> */}{' '}
              <TrendingViewsText>{publishedAt}</TrendingViewsText>
            </TrendingViewsAndPublished>
          </TrendingVideoDetailsTextContainer>
        </TrendingVideoDetailsContainer>
      </TrendingVideoCard>
    </Link>
  )
}
export default TrendingVideoitem
