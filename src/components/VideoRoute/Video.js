import styled from 'styled-components'

export const VideoContainer = styled.div`
  //   display: flex;
  //   justify-content: center;
  margin-bottom: 8px;
  height: 35vw;
  padding: 0 0px;
  @media (max-width: 576px) {
    height: 50vw;
  }
`

export const DescriptionContainer = styled.div`
  margin-bottom: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  border-bottom: 2px solid #ebebeb;
`

export const TitleContainer = styled.p`
  font-size: 18px;
  margin: 12px 0;
`

export const ViewsText = styled.p`
  font-size: 13px;
  color: #64748b;
  @media (max-width: 576px) {
    color: ${props => (props.theme === true ? '#475569' : '#7a889c')};
  }
`

export const ViewsAndUpload = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 15px;
  }
  @media (max-width: 576px) {
    gap: 5px;
  }
`
export const ViewsAndLikes = styled.div`
  display: flex;
  justify-content: space-between;
  color: #64748b;
  padding-right: 30px;
  @media (max-width: 576px) {
    padding-right: 10px;
  }
  @media (max-width: 576px) {
    color: ${props => (props.theme === true ? '#475569' : '#7a889c')};
  }
`

export const ReactionsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 576px) {
    gap: 6px;
  }
`

export const ReactionButton = styled.button`
  color: ${props => (props.reacted === true ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: 0;
  outline: none;
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  align-items: center;
  @media (max-width: 576px) {
    gap: 2px;
  }
`
export const ChannelDisplay = styled.div`
  display: flex;
  gap: 12px;
  padding: 6px 15px;
  @media (max-width: 576px) {
    gap: 9px;
    padding: 6px 18px;
  }
`

export const ChannelLogoDesc = styled.img`
  height: 35px;
`
export const ChannelNameAndSubs = styled.div`
  padding: 0 6px;
`

export const ChannelNameOfVideo = styled.p`
  font-size: 14px;
  //   color: #64748b;
`
export const ChannelSubsOfVideo = styled.p`
  font-size: 11px;
  color: #64748b;
  @media (max-width: 576px) {
    color: ${props => (props.theme === true ? '#475569' : '#7a889c')};
  }
`
export const DescText = styled.p`
  margin-left: 64px;
  color: #7e858e;
  @media (max-width: 576px) {
    margin-left: 15px;
    margin-top: 4px;
    font-size: 12px;
  }
`
