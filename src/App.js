import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'

import AllContext from './context/AllContext'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import TrendingRoute from './components/TrendingRoute'

import Gaming from './components/Gaming'

import SavedVideos from './components/Savedvideos'

import NotFound from './components/NotFound'

import './App.css'
import VideoItemDetails from './components/VideoRoute'

class App extends Component {
  state = {lightTheme: true, SavedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  saveItem = newItem => {
    const {SavedVideosList} = this.state
    const newList = [...SavedVideosList, newItem]

    this.setState({SavedVideosList: newList})
  }

  unsaveItem = item => {
    const {SavedVideosList} = this.state
    const updatedList = SavedVideosList.filter(each => each !== item)

    this.setState({SavedVideosList: updatedList})
  }

  render() {
    const {lightTheme, SavedVideosList} = this.state
    return (
      <AllContext.Provider
        value={{
          lightTheme,
          SavedVideosList,
          saveItem: this.saveItem,
          unsaveItem: this.unsaveItem,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
        {/* <div>
          <Login />
        </div> */}
      </AllContext.Provider>
    )
  }
}

export default App
