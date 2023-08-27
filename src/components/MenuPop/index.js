import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {AiFillHome, AiOutlineMenuUnfold} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import AllContext from '../../context/AllContext'

import {
  //   SidebarContainer,
  //   UlContainer,
  LiItem,
  //   ContactDiv,
  //   ContactLogo,
} from '../Sidebar/Sidebar'

import {TransparentButton} from '../ProtectedRoute/styles'

import {NavLogout} from '../Header/Header'

import './index.css'
import {PopopContent} from '../Logout/Logout'

const MenuPop = props => {
  const {location} = props
  const {pathname} = location

  return (
    <AllContext.Consumer>
      {values => {
        const {lightTheme} = values

        return (
          <Popup
            modal
            trigger={
              <NavLogout
                className="display-on-mobile"
                theme={lightTheme}
                type="button"
                data-testid="theme"
              >
                <AiOutlineMenuUnfold />
              </NavLogout>
            }
          >
            {close => (
              <PopopContent theme={lightTheme}>
                <ul>
                  <LiItem theme={lightTheme}>
                    <Link className="menu-link" to="/">
                      <LiItem theme={lightTheme}>
                        <TransparentButton
                          activeRoute={pathname === '/'}
                          bgColor={lightTheme ? '#f1f5f9' : '#383838'}
                          theme={lightTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          <p className="route-option">
                            <AiFillHome
                              color={pathname === '/' ? 'red' : undefined}
                            />{' '}
                            Home
                          </p>
                        </TransparentButton>{' '}
                      </LiItem>
                    </Link>
                    <Link className="menu-link" to="/trending">
                      <LiItem>
                        <TransparentButton
                          activeRoute={pathname === '/trending'}
                          bgColor={lightTheme ? '#f1f5f9' : '#383838'}
                          theme={lightTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          <p className="route-option">
                            <HiFire
                              color={
                                pathname === '/trending' ? 'red' : undefined
                              }
                            />{' '}
                            Trending
                          </p>
                        </TransparentButton>{' '}
                      </LiItem>
                    </Link>
                    <Link className="menu-link" to="/gaming">
                      <LiItem>
                        <TransparentButton
                          activeRoute={pathname === '/gaming'}
                          bgColor={lightTheme ? '#f1f5f9' : '#383838'}
                          theme={lightTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          <p className="route-option">
                            <SiYoutubegaming
                              color={pathname === '/gaming' ? 'red' : undefined}
                            />{' '}
                            Gaming
                          </p>
                        </TransparentButton>{' '}
                      </LiItem>
                    </Link>
                    <Link className="menu-link" to="/saved-videos">
                      <LiItem>
                        <TransparentButton
                          activeRoute={pathname === '/saved-videos'}
                          bgColor={lightTheme ? '#f1f5f9' : '#383838'}
                          theme={lightTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          <p className="route-option">
                            <BiListPlus
                              color={
                                pathname === '/saved-videos' ? 'red' : undefined
                              }
                            />{' '}
                            Saved videos
                          </p>
                        </TransparentButton>{' '}
                      </LiItem>
                    </Link>
                  </LiItem>
                </ul>
              </PopopContent>
            )}
          </Popup>
        )
      }}
    </AllContext.Consumer>
  )
}
export default withRouter(MenuPop)
