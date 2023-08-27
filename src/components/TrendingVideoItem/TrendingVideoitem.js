import styled from 'styled-components'

export const TrendingVideoCard = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  //   flex-direction: column;
  gap: 18px;
  flex-grow: 1;
  flex-shrink: 1;
  @media (max-width: 576px) {
    gap: 10px;
  }
`

export const TrendingVideoThumbnail = styled.img`
  max-height: 100%;
  max-width: 30%;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    max-width: 50%;
  }
`
export const TrendingVideoDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 10px;
  gap: 8px;
  @media (max-width: 576px) {
    font-size: 13px;
    padding-top: 2px;
  }
`
export const TrendingChannelLogo = styled.img`
  height: 30px;
`

export const TrendingVideoDetailsTextContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`

export const TrendingVideoTitle = styled.p`
  font-size: 18px;
  //   height: 40px;
  text-overflow: ellipsis;
  margin-bottom: 3px;
  @media (max-width: 576px) {
    font-size: 13px;
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
  font-size: 14px;
  margin-top: 4px;
  color: #475569;
  @media (max-width: 576px) {
    font-size: 11px;
  }
`
export const TrendingViewsAndPublished = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`

export const SampleTrUl = styled.ul`
  list-style-type: disc;
  padding-left: 8px;
`
