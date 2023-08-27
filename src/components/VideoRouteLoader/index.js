import {VRLContainer, VRLDesc, VRC} from './VideoRouteLoader'
import AllContext from '../../context/AllContext'

const VideoRouteLoader = () => (
  <AllContext.Consumer>
    {values => {
      const {lightTheme} = values

      return (
        <VRC>
          <VRLContainer
            data-testid="videoItemDetails"
            bgC="#555"
            theme={lightTheme}
          >
            {' '}
          </VRLContainer>
          <VRLDesc> </VRLDesc>
        </VRC>
      )
    }}
  </AllContext.Consumer>
)

export default VideoRouteLoader
