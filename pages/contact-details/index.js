import Layout from '../../components/Layout'
import contactDetails from '../../static/contactDetails'
import ContactField from '../../components/ContactField'

export default () => (
  <Layout>
    {contactDetails.map(detail => (
      <ContactField>
        <h5>{detail.label}</h5>
        <a href={detail.link}>
          <h3>{detail.value}</h3>
        </a>
      </ContactField>
    ))}
  </Layout>
)
