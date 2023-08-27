import styled from 'styled-components'

export const LoaderDiv = styled.div`
  color: transparent;
  padding-top: 8px;
  //   background-color: #999;
  height: 320px;
  width: 280px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  @media (max-width: 784px) {
    height: 320px;
    width: 190px;
  }
  @media (max-width: 576px) {
    height: 285px;
    width: 190px;
  }
`

export const LoaderTnSpace = styled.div`
  background-color: #ddd;
  height: 50%;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 576px) {
    min-height: 185px;
  }
`
export const LoaderDSpace = styled.div`
  //   background-color: #ddd;
  padding-top: 10px;
  height: 50%;
  width: 100%;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 10px;
  gap: 8px;
`
export const LoaderChannel = styled.div`
  background-color: #ddd;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`
export const LoaderVideoName = styled.div`
  background-color: #ddd;
  height: 35px;
  width: 100%;
`
export const LoaderD = styled.div`
  //   background-color: #ddd;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 90%;
`
export const LoaderChannelName = styled.div`
  background-color: #ddd;
  height: 15px;
  width: 100%;
`
