import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import {ContentContainer} from '../ProtectedRoute/styles'
import {HeadingOfContainer, HeadingOfPage, SpanElement} from './trending'
import AllContext from '../../context/AllContext'

import {VideosUlContainer, HomeContentContainer} from '../Home/Home'
import TrendingVideoitem from '../TrendingVideoItem'
import TrendingLoader from '../TrendingLoader'
import FailedView from '../FailedView'

const HomePageStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class TrendingRoute extends Component {
  state = {statusofpage: 'LOADING', listofvideos: []}

  componentDidMount() {
    this.fetchdata()
  }

  retrybtn = () => {
    this.fetchdata()
  }

  fetchdata = async () => {
    this.setState({statusofpage: HomePageStatus.loading})

    const jwtToken = Cookies.get('jwt_token')

    const requiredUrl = `https://apis.ccbp.in/videos/trending`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(requiredUrl, options)
      const Data = await response.json()

      if (response.ok === true) {
        const videosList = Data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
        }))
        this.setState({
          statusofpage: HomePageStatus.success,
          listofvideos: videosList,
        })
      } else {
        this.setState({statusofpage: HomePageStatus.failed})
      }
    } catch (error) {
      this.setState({statusofpage: HomePageStatus.failed})
    }
  }

  fetchSuccess = () => {
    const {listofvideos} = this.state

    return (
      <VideosUlContainer>
        {listofvideos.map(each => (
          <TrendingVideoitem key={each.id} item={each} />
        ))}
      </VideosUlContainer>
    )
  }

  fetchingFailed = () => (
    <>
      <FailedView onClickRetry={this.fetchdata} />
    </>
  )

  PageLoading = () => (
    <div data-testid="loader">
      <VideosUlContainer>
        <TrendingLoader> </TrendingLoader>
        <TrendingLoader> </TrendingLoader>
        <TrendingLoader> </TrendingLoader>
        <TrendingLoader> </TrendingLoader>
        <TrendingLoader> </TrendingLoader>
      </VideosUlContainer>
    </div>
  )

  displayOfHomepage = () => {
    const {statusofpage} = this.state
    switch (statusofpage) {
      case HomePageStatus.success:
        return this.fetchSuccess()
      case HomePageStatus.loading:
        return this.PageLoading()
      case HomePageStatus.failed:
        return this.fetchingFailed()

      default:
        return null
    }
  }

  render() {
    return (
      <AllContext.Consumer>
        {values => {
          const {lightTheme} = values
          return (
            <ContentContainer
              theme={lightTheme}
              bgC="#0f0f0f"
              data-testid="trending"
            >
              <HeadingOfContainer theme={lightTheme}>
                <HeadingOfPage>
                  <SpanElement theme={lightTheme}>
                    <HiFire />
                  </SpanElement>{' '}
                  Trending
                </HeadingOfPage>
              </HeadingOfContainer>
              <HomeContentContainer>
                {this.displayOfHomepage()}
              </HomeContentContainer>
            </ContentContainer>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default TrendingRoute
