import styled from 'styled-components'

const Projects = styled.div`
  .project > h5 {
    text-align: right;
    margin-left: auto;
    margin: 0;
  }
  .project + .project {
  margin-top: 40px;
  }
  @media screen and (max-width: 800px) {
    .project {
      width: calc(100vw - 30px);
    }
    .subheading {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 801px) and (max-width: 1440px) {
    .project {
      width: calc(100vw - 435px);
    }
  }
  @media screen and (min-width: 1441px) {
    .project {
      width: calc(100vw - 672px);
    }
  }
`

export default Projects
