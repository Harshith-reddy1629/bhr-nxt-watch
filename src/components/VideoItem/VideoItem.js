import styled from 'styled-components'

export const VideoCard = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`

export const VideoThumbnail = styled.img`
  max-height: 100%;
  //   max-width: 100%;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 10px;
  gap: 8px;
`
export const ChannelLogo = styled.img`
  height: 30px;
`

export const VideoDetailsTextContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const VideoTitle = styled.p`
  font-size: 14px;
  //   height: 40px;
  text-overflow: ellipsis;
  margin-bottom: 3px;
`
export const ChannelName = styled.p`
  font-size: 12px;
  color: #475569;
  font-weight: 600;
  margin-top: 5px;
  @media (max-width: 576px) {
    color: ${props => (props.theme === true ? '#475569' : '#7a889c')};
  }
`
export const ViewsText = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: #475569;
  @media (max-width: 576px) {
    color: ${props => (props.theme === true ? '#475569' : '#7a889c')};
  }
`
export const ViewsAndPublished = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`
export const SampleUl = styled.ul`
  list-style-type: disc;
`
