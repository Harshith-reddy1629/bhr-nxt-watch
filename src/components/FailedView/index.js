import AllContext from '../../context/AllContext'

import './index.css'

const FailedView = props => (
  <AllContext.Consumer>
    {values => {
      const {lightTheme} = values

      const {onClickRetry} = props

      return (
        <div className="failed-view">
          <img
            src={
              lightTheme === true
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            }
            alt="failure view"
            height="250px"
          />
          <h1>Oops! Something Went Wrong</h1>
          <p>
            We are having some trouble to complete your request. Please try
            again.
          </p>
          <button className="retry-bt" type="button" onClick={onClickRetry}>
            Retry
          </button>
        </div>
      )
    }}
  </AllContext.Consumer>
)

export default FailedView
