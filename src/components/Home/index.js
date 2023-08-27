import {Component} from 'react'

import {AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'

import {ContentContainer} from '../ProtectedRoute/styles'

import Banner from '../Banner'

import {
  HomeContentContainer,
  HomeSearchBtn,
  HomeSearchInput,
  HomeSearchContainer,
  VideosUlContainer,
  NoSearchContainer,
  NoSearchBtn,
} from './Home'

import AllContext from '../../context/AllContext'

import VideoItem from '../VideoItem'

import HomeLoader from '../HomeLoader'

import FailedView from '../FailedView'

const HomePageStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class Home extends Component {
  state = {statusofpage: 'LOADING', listofvideos: [], searchvalue: ''}

  componentDidMount() {
    this.fetchdata()
  }

  fetchdata = async (q = '') => {
    this.setState({statusofpage: HomePageStatus.loading})

    const jwtToken = Cookies.get('jwt_token')

    const requiredUrl = `https://apis.ccbp.in/videos/all?search=${q}`

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

  onSearch = () => {
    const {searchvalue} = this.state
    this.fetchdata(searchvalue)
  }

  searchEvent = event => {
    this.setState({searchvalue: event.target.value})
  }

  fetchSuccess = () => {
    const {listofvideos} = this.state

    if (listofvideos.length === 0) {
      return (
        <NoSearchContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
            height="190px"
          />
          <h1>No Search results found</h1>
          <p>Try different key words or remove search filter</p>
          <AllContext.Consumer>
            {values => {
              const {lightTheme} = values
              return (
                <NoSearchBtn
                  theme={lightTheme}
                  type="button"
                  onClick={this.onSearch}
                >
                  Retry
                </NoSearchBtn>
              )
            }}
          </AllContext.Consumer>
        </NoSearchContainer>
      )
    }

    return (
      <VideosUlContainer>
        {listofvideos.map(each => (
          <VideoItem key={each.id} item={each} />
        ))}
      </VideosUlContainer>
    )
  }

  fetchingFailed = () => (
    <div>
      <FailedView onClickRetry={this.fetchdata} />
    </div>
  )

  PageLoading = () => (
    <VideosUlContainer data-testid="loader">
      <HomeLoader />
      <HomeLoader />
      <HomeLoader />
      <HomeLoader />
      <HomeLoader />
      <HomeLoader />
      <HomeLoader />
      <HomeLoader />
    </VideosUlContainer>
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
    const {searchvalue} = this.state

    return (
      <AllContext.Consumer>
        {values => {
          const {lightTheme} = values
          return (
            <ContentContainer
              theme={lightTheme}
              bgC="#181818"
              data-testid="home"
            >
              <Banner />

              <HomeContentContainer>
                <HomeSearchContainer theme={lightTheme}>
                  <HomeSearchInput
                    theme={lightTheme}
                    value={searchvalue}
                    type="search"
                    placeholder="Search"
                    onChange={this.searchEvent}
                  />

                  <HomeSearchBtn
                    data-testid="searchButton"
                    theme={lightTheme}
                    type="button"
                    onClick={this.onSearch}
                  >
                    <AiOutlineSearch />
                  </HomeSearchBtn>
                </HomeSearchContainer>

                {this.displayOfHomepage()}
              </HomeContentContainer>
            </ContentContainer>
          )
        }}
      </AllContext.Consumer>
    )
  }
}
export default Home
