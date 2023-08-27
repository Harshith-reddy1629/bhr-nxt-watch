import {Link} from 'react-router-dom'

import {
  TrendingVideoCard,
  TrendingVideoThumbnail,
  TrendingVideoDetailsContainer,
  //   TrendingChannelLogo,
  TrendingVideoDetailsTextContainer,
  TrendingVideoTitle,
  //   TrendingChannelName,
  TrendingViewsText,
  TrendingViewsAndPublished,
} from './GamingItem'

import './index.css'

const GamingItem = props => {
  const {item} = props

  const {id, title, thumbnailUrl, viewCount} = item
  return (
    <Link to={`/videos/${id}`} className="gaming-link-item">
      <TrendingVideoCard>
        <TrendingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <TrendingVideoDetailsContainer>
          {/* <TrendingChannelLogo
            src={channel.profileImageUrl}
            alt="channel logo"
          /> */}
          <TrendingVideoDetailsTextContainer>
            <TrendingVideoTitle>{title}</TrendingVideoTitle>
            {/* <TrendingChannelName>{channel.name}</TrendingChannelName> */}
            <TrendingViewsAndPublished>
              <TrendingViewsText>
                {viewCount} Watching Worldwide{' '}
              </TrendingViewsText>
              {/* <ViewsText>
                <BsDot />
              </ViewsText> */}{' '}
              {/* <TrendingViewsText>
                {' '}
                {moment(publishedAt).fromNow()}
              </TrendingViewsText> */}
            </TrendingViewsAndPublished>
          </TrendingVideoDetailsTextContainer>
        </TrendingVideoDetailsContainer>
      </TrendingVideoCard>
    </Link>
  )
}

export default GamingItem
