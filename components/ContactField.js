import styled from 'styled-components'

const ContactField = styled.div`
  h5 {
    margin-top: 0;
    margin-bottom: 10px;
    opacity: 0.8;
  }
  h3 {
    margin-top: 0;
  }
  @media screen and (max-width: 800px) {
    h3 {
      padding-left: 20px;
    }
  }
  @media screen and (min-width: 801px) {
    h3 {
      font-weight: bold;
      margin-left: 40px;
    }
  }
`

export default ContactField
