import {Component} from 'react'

import {Link} from 'react-router-dom'

import {ContentContainer} from '../ProtectedRoute/styles'
import AllContext from '../../context/AllContext'
import {VideosUlContainer} from '../Home/Home'
// import TrendingVideoitem from '../TrendingVideoItem'
import {SavedImg, SavedContainer} from './Saved'

import './index.css'

class SavedVideos extends Component {
  displaySaved = SavedVideosList => {
    if (SavedVideosList.length === 0) {
      return (
        <SavedContainer>
          <SavedImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <h1>No saved videos found</h1>

          <p>Save your videos by clicking a button</p>
        </SavedContainer>
      )
    }
    return (
      <VideosUlContainer>
        {SavedVideosList.map(each => (
          <li key={each.id} className="">
            <Link to={`/videos/${each.id}`}>
              <img className="saved-img" src={each.thumbnailUrl} alt="saved" />
            </Link>
          </li>
        ))}
      </VideosUlContainer>
    )
  }

  render() {
    return (
      <AllContext.Consumer>
        {values => {
          const {lightTheme, SavedVideosList} = values

          return (
            <ContentContainer
              data-testid="savedVideos"
              bgC="#0f0f0f"
              theme={lightTheme}
            >
              {' '}
              {this.displaySaved(SavedVideosList)}
            </ContentContainer>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default SavedVideos
