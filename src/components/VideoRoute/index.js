import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

// import moment from 'moment'

import {ContentContainer} from '../ProtectedRoute/styles'

import {
  VideoContainer,
  DescriptionContainer,
  TitleContainer,
  ViewsText,
  ViewsAndLikes,
  ViewsAndUpload,
  ReactionButton,
  ReactionsContainer,
  ChannelDisplay,
  ChannelLogoDesc,
  ChannelNameAndSubs,
  ChannelNameOfVideo,
  ChannelSubsOfVideo,
  DescText,
} from './Video'
import AllContext from '../../context/AllContext'
import FailedView from '../FailedView'
import VideoRouteLoader from '../VideoRouteLoader'

const ProgressOfPage = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    progress: ProgressOfPage.loading,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.fetchdataOfVideo()
  }

  //   retrybtn = () => {
  //     this.fetchdataOfVideo()
  //   }

  fetchdataOfVideo = async () => {
    this.setState({progress: ProgressOfPage.loading})

    const {match} = this.props

    const {params} = match

    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)

      const data = await response.json()

      const videodata = data.video_details

      const updatedData = {
        id: videodata.id,
        title: videodata.title,
        videoUrl: videodata.video_url,
        thumbnailUrl: videodata.thumbnail_url,
        channel: {
          name: videodata.channel.name,
          profileImageUrl: videodata.channel.profile_image_url,
          subscriberCount: videodata.channel.subscriber_count,
        },
        viewCount: videodata.view_count,
        publishedAt: videodata.published_at,
        description: videodata.description,
      }

      this.setState({
        videoDetails: updatedData,
        progress: ProgressOfPage.success,
        // progress: ProgressOfPage.loading,
      })
    } catch (error) {
      this.setState({
        progress: ProgressOfPage.failed,
      })
    }
  }

  like = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  dislike = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  successView = () => (
    <AllContext.Consumer>
      {values => {
        const {lightTheme, SavedVideosList, unsaveItem, saveItem} = values

        const {videoDetails, isLiked, isDisliked} = this.state

        const {
          title,
          videoUrl,

          channel,
          viewCount,
          publishedAt,

          description,
        } = videoDetails

        const savingItem = () => {
          saveItem(videoDetails)
        }

        const unsavingItem = () => {
          unsaveItem(videoDetails)
        }

        console.log(SavedVideosList)

        console.log(videoDetails)

        const checkv = SavedVideosList.filter(
          each => each.id === videoDetails.id,
        )

        const isSaved = checkv.length !== 0

        console.log(';;', isSaved)
        return (
          <ContentContainer
            data-testid="videoItemDetails"
            bgC="#0f0f0f"
            theme={lightTheme}
          >
            <VideoContainer>
              <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
            </VideoContainer>
            <DescriptionContainer>
              <TitleContainer>{title}</TitleContainer>

              <ViewsAndLikes>
                <ViewsAndUpload>
                  <ViewsText>{viewCount} Views</ViewsText>
                  {/* <ViewsText>{moment(publishedAt).fromNow()}</ViewsText> */}
                  <ViewsText>{publishedAt}</ViewsText>
                </ViewsAndUpload>
                <ReactionsContainer>
                  <ReactionButton reacted={isLiked} onClick={this.like}>
                    <BiLike />
                    Like
                  </ReactionButton>
                  <ReactionButton reacted={isDisliked} onClick={this.dislike}>
                    <BiDislike />
                    Dislike
                  </ReactionButton>
                  {isSaved ? (
                    <ReactionButton
                      reacted={isSaved}
                      onClick={unsavingItem}
                      type="button"
                      data-testid="unSave"
                    >
                      <BiListPlus />
                      Saved
                    </ReactionButton>
                  ) : (
                    <ReactionButton
                      reacted={isSaved}
                      onClick={savingItem}
                      type="button"
                      data-testid="Save"
                    >
                      <BiListPlus />
                      Save
                    </ReactionButton>
                  )}
                </ReactionsContainer>
              </ViewsAndLikes>
            </DescriptionContainer>
            <ChannelDisplay>
              <ChannelLogoDesc
                src={channel.profileImageUrl}
                alt="channel logo"
              />
              <ChannelNameAndSubs>
                <ChannelNameOfVideo>{channel.name}</ChannelNameOfVideo>
                <ChannelSubsOfVideo>
                  {channel.subscriberCount} subscribers
                </ChannelSubsOfVideo>
              </ChannelNameAndSubs>
            </ChannelDisplay>
            <DescText>{description}</DescText>
          </ContentContainer>
        )
      }}
    </AllContext.Consumer>
  )

  render() {
    const {progress} = this.state
    switch (progress) {
      case ProgressOfPage.success:
        return this.successView()
      case ProgressOfPage.loading:
        return (
          //   <div data-testid="loader">
          <VideoRouteLoader />
          //   </div>
        )
      case ProgressOfPage.failed:
        return (
          <>
            <FailedView />{' '}
            <button type="button" onClick={this.fetchdataOfVideo}>
              Retry
            </button>
          </>
        )

      default:
        return null
    }
  }
}
export default VideoItemDetails
