import Link from 'next/link'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: 0px;
  }
  li,
  ul {
    list-style: none;
    padding-left: 0;
  }
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
  p {
    margin-top: 0;
  }
  body {
    background-color: #000000;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }
  /*Name at the top of the page*/
  h1 {
    font-family: Playfair Display;
    font-weight: bold;
    letter-spacing: 0.02em;
  }
  /*Tagline*/
  h2 {
    font-family: Raleway;
    font-weight: 500;
  }
  /*Page titles*/
  h3 {
    font-family: Playfair Display;
    font-weight: normal;
    letter-spacing: 0.02em;
  }
  li h3:hover {
    font-weight: bold;
  }
  .title--active {
    font-weight: bold;
  }
  /*Sub titles*/
  .subheading {
    font-family: Raleway;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
  }
  /*Print link*/
  .link--print {
    font-family: Raleway;
    letter-spacing: 0.02em;
    font-weight: 500;
  }
  /*Icon links*/
  .link--icon {
    font-family: Raleway;
    letter-spacing: 0.04em;
    color: white;
    background-color: black;
    border: 0;
    display: flex;
    align-items: center;
    padding-left: 0;
    letter-spacing: 0.04em;
  }
  .link--icon > svg {
    fill: white !important;
    width: 16px;
    margin-left: 15px;
  }
  h5 {
    font-family: Raleway;
    letter-spacing: 0.03em;
    font-weight: 300;
  }
  p {
    font-family: Raleway;
    font-weight: 300;
    opacity: 0.9;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 24px;
      line-height: 34px;
    }
  }
  @media screen and (min-width: 1441px) {
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 36px;
    }
    h3 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1000px) {
    .link--print {
      font-size: 14px;
    }
    .link--icon {
      font-size: 18px;
    }
    h4 {
      font-size: 18px;
    }
    h5 {
      font-size: 12px;
    }
    p {
      font-size: 16px;
      line-height: 25px;
    }
  }
  @media screen and (min-width: 1001px) {
    .link--print,
    h4 {
      font-size: 30px;
    }
    .link--icon {
      font-size: 24px;
    }
    .subheading {
      margin-top: 0;
    }
    h5 {
      font-size: 18px;
    }
    p {
      font-size: 24px;
      line-height: 35px;
    }
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
      <Header>
        <h1>Daisy Maclennan</h1>
        <h2>Web developer, Portsmouth UK</h2>
      </Header>
      <Content>
        <Navigation />
        <div className="content--inner">
          {children}
        </div>
      </Content>
  </div>
)

export default Layout
