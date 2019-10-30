import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  h1 {
  margin-bottom: 0;
  }
  h2 {
  margin-top: 10px;
  }
  @media screen and (max-width: 800px) {
    width: calc(100vw - 30px);
    padding-left: 15px;
    padding-right: 15px;

    h1 {
      margin-top: 20px;
    }
  }
  @media screen and (min-width: 801px) and (max-width: 1440px) {
    width: calc(100vw - 80px);
    padding-left: 40px;
    padding-right: 40px;
    h1 {
      margin-top: 40px;
    }
  }
  @media screen and (min-width: 1441px) {
    width: calc(100vw - 140px);
    padding-left: 70px;
    padding-right: 70px;
    h1 {
      margin-top: 60px;
    }
  }
`

export default Header
