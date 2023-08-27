import styled from 'styled-components'

export const TrendingVideoCard = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex-grow: 1;
  flex-shrink: 1;
`

export const TrendingVideoThumbnail = styled.img`
  max-height: 70%;
  //   max-width: 50%;
  flex-wrap: wrap;
`
export const TrendingVideoDetailsContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  padding-top: 5px;
  gap: 2px;
`
export const TrendingChannelLogo = styled.img`
  height: 30px;
`

export const TrendingVideoDetailsTextContainer = styled.div`
  height: 30%;
  width: 100%;
  flex-wrap: wrap;
`

export const TrendingVideoTitle = styled.p`
  font-size: 15px;
  //   height: 40px;
  text-overflow: ellipsis;
  margin-bottom: 1px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`
export const TrendingChannelName = styled.p`
  font-size: 14px;
  color: #475569;
  font-weight: 600;
  margin-top: 5px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`
export const TrendingViewsText = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: #475569;
  @media (max-width: 576px) {
    font-size: 10px;
  }
`
export const TrendingViewsAndPublished = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`
