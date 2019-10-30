import styled from 'styled-components'

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  .content--inner {
    overflow-y: scroll;
  }
  /*Screen widths*/
  @media screen and (max-width: 800px) {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 130px;

  .content--inner {
    width: calc(100vw - 30px);
  }
  }
  @media screen and (min-width: 801px) and (max-width: 1440px) {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 200px;

  .content--inner {
    height: calc(100vh - 250px);
    padding-top: 5px;
  }
  }
  @media screen and (min-width: 1441px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 240px;

    .content--inner {
      height: calc(100vh - 340px);
      padding-top: 12px;
    }
  }
  @media screen and (min-width: 801px) {
    display: flex;
  }
`

export default Content
