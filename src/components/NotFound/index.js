import AllContext from '../../context/AllContext'
import {ContentContainer} from '../ProtectedRoute/styles'

const NotFound = () => (
  <AllContext.Consumer>
    {values => {
      const {lightTheme} = values

      return (
        <ContentContainer bgC="#181818" theme={lightTheme}>
          <img
            src={
              lightTheme === true
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            }
            alt="not found"
            height="140px"
          />
          <h1>Page Not Found</h1>
          <p>we are sorry, the page you requested could not be found.</p>
        </ContentContainer>
      )
    }}
  </AllContext.Consumer>
)

export default NotFound
