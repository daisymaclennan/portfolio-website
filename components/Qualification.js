import styled from 'styled-components'

const Qualification = styled.div`
  position: relative;

  .qualification__grade {
    text-transform: uppercase;
    font-weight: bold;
    position: absolute;
    right: 0;
    top: 2px;
  }
  .qualification__title {
    width: 90%;
  }
  @media screen and (min-width: 801px) {
    .qualification__title {
      margin-bottom: $medium-gap;
    }
  }
`

export default Qualification
