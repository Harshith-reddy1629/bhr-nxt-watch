import styled from 'styled-components'

export const LoaderDiv = styled.div`
  color: transparent;
  padding-top: 8px;

  width: 100%;

  flex-grow: 1;
  flex-shrink: 1;

  height: 220px;

  display: flex;
  /* flex-direction: column; */
  flex-grow: 1;
  flex-shrink: 1;
  gap: 8px;
  @media (max-width: 784px) {
    height: 160px;
    /* width: 190px; */
  }

  @media (max-width: 576px) {
    height: 135px;
    /* width: 190px; */
  }
`

export const LoaderTnSpace = styled.div`
  background-color: #ddd;
  height: 100%;
  width: 40%;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const LoaderDSpace = styled.div`
  //   background-color: #ddd;
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
export const LoaderChannel = styled.div`
  background-color: #ddd;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`
export const LoaderVideoName = styled.div`
  background-color: #ddd;
  height: 45px;
  width: 100%;
`
export const LoaderD = styled.div`
  //   background-color: #ddd;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`
export const LoaderChannelName = styled.div`
  background-color: #ddd;
  height: 25px;
  width: 100%;
`
