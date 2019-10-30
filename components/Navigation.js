import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = ({className}) => {
  const router = useRouter()
  var activeRoute = "personal-statement"
  switch(router.pathname){
    case "/":
      activeRoute = "personal-statement"
      break
    case "/my-work":
      activeRoute = "my-work"
      break
    case "/qualifications":
      activeRoute = "qualifications"
      break
    case "/contact-details":
      activeRoute = "contact-details"
      break
  }
  return(
    <nav className={className}>
      <ul>
        <li>
          <Link href="/">
            <a className={activeRoute === "personal-statement" ? "link--active" : "link--inactive"}>
              <h3>
                personal statement
              </h3>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/my-work">
            <a className={activeRoute === "my-work" ? "link--active" : "link--inactive"}>
              <h3>
                my work
              </h3>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/qualifications">
            <a className={activeRoute === "qualifications" ? "link--active" : "link--inactive"}>
              <h3>
                qualifications
              </h3>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact-details">
            <a className={activeRoute === "contact-details" ? "link--active" : "link--inactive"}>
              <h3>
                contact details
              </h3>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const StyledNavigation = styled(Navigation)`
  ul {
    margin-top: 0;
  }
  a{
    display: block;
  }
  .link--active h3 {
    font-weight: bold;
  }
  @media screen and (max-width: 800px) {
  .link--inactive {
    display: none;
  }
  .link--active {
    margin-bottom: 20px;
  }
  }
  @media screen and (min-width: 801px) and (max-width: 1440px) {
    min-width: 355px;

    .link--active {
      background-image: url("../../static/bullet.svg");
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: 0px 10px;
      padding-left: 40px;
    }
    h3 {
      margin-bottom: 15px;
    }
  }
  @media screen and (min-width: 1441px) {
    min-width: 532px;

    .link--active {
      background-image: url("../../static/bullet.svg");
      background-repeat: no-repeat;
      background-position: 0px 15px;
      padding-left: 45px;
    }
    h3 {
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: 801px) {
    h3 {
      margin-top: 0;
    }
  }
`

export default StyledNavigation
