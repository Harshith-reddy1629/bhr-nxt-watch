// import {BsDot} from 'react-icons/bs'
// import {GoDotFill} from 'react-icons/go'

import {
  LoaderDiv,
  LoaderTnSpace,
  LoaderDSpace,
  //   LoaderChannel,
  LoaderVideoName,
  LoaderChannelName,
  LoaderD,
} from './GamingLoader'

import AllContext from '../../context/AllContext'

const GamingLoader = () => (
  <AllContext.Consumer>
    {values => {
      const {lightTheme} = values
      return (
        <LoaderDiv>
          <LoaderTnSpace theme={lightTheme}> </LoaderTnSpace>{' '}
          <LoaderDSpace theme={lightTheme}>
            <LoaderD>
              <LoaderVideoName> </LoaderVideoName>
              <LoaderChannelName> </LoaderChannelName>
            </LoaderD>
          </LoaderDSpace>{' '}
        </LoaderDiv>
      )
    }}
  </AllContext.Consumer>
)

export default GamingLoader
