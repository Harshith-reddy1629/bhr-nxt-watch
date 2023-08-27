import styled from 'styled-components'

export const HomeContentContainer = styled.div`
  padding: 12px;
  width: 100%;
  //   background-color: red;
`
export const Card = styled.div``

export const HomeSearchContainer = styled.div`
  width: 35%;
  border: 1px solid ${props => (props.theme === true ? '#e2e8f0' : '#424242')};
  display: flex;
  @media (max-width: 768px) {
    width: 70%;
  }
`

export const HomeSearchInput = styled.input`
  width: 85%;
  outline: none;
  padding: 6px 6px;
  border: 0;
  background-color: transparent;
  color: ${props => (props.theme === true ? '#424242' : '#e2e8f0')};
`

export const HomeSearchBtn = styled.button`
  background-color: ${props =>
    props.theme === true ? 'transparent' : '#606060'};
  border: 0;
  border-left: 1px solid
    ${props => (props.theme === true ? '#e2e8f0' : '#424242')};
  color: ${props => (props.theme === true ? '#424242' : '#909090')};
  outline: none;
  width: 15%;
`
export const VideosUlContainer = styled.ul`
  display: flex;
  //   justify-content: center;
  flex-wrap: wrap;
  //   margin: 0;
  padding: 0;
  padding-top: 20px;
  gap: 15px;
`

export const NoSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
export const NoSearchBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${props => (props.theme === true ? '#120965' : '#fff')};
  color: ${props => (props.theme === true ? '#120965' : '#fff')};
  padding: 6px 18px;
  border-radius: 6px;
`
