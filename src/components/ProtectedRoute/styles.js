import styled from 'styled-components'

export const Container = styled.div`
  color: ${props => (props.theme === true ? '#181818' : '#fff')};
  height: 100vh;
`

export const BodyContainer = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  //   @media (max-width: 768px) {
  //     height: calc(100vh - 60px);
  //   }
`
export const TransparentButton = styled.button`
  background-color: ${props =>
    props.activeRoute === true ? props.bgColor : 'transparent'};
  //   font-weight: ${props => props.activeRoute && 'bold'};
  border: 0;
  color: ${props => (props.theme === true ? '#181818' : '#fff')};
  padding: 12px;
  width: 100%;
  border-left: ${props =>
    props.activeRoute === true ? '0px solid red' : '0px'};
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 0;
  background-color: ${props => (props.theme === true ? '#f9f9f9' : props.bgC)};
`
