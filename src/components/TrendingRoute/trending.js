import styled from 'styled-components'

export const HeadingOfPage = styled.h1`
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    font-size: 22px;
  }
`
export const HeadingOfContainer = styled.div`
  height: 70px;
  background-color: ${props => (props.theme === true ? '#ebebeb' : '#292929')};

  display: flex;
  align-items: center;
  padding-left: 40px;
  @media (max-width: 576px) {
    padding-left: 20px;
    height: 55px;
  }
`

export const SpanElement = styled.span`
  height: 55px;
  width: 55px;
  //   padding: 4px 8px;
  background-color: ${props => (props.theme === true ? '#cbd5e1' : '#191919')};
  //   background-color:;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  @media (max-width: 576px) {
    height: 35px;
    width: 35px;
  }
`
