import Layout from '../../components/Layout'
import qualifications from '../../static/qualifications'
import ExpandingSections from '../../components/ExpandingSections'
import Qualification from '../../components/Qualification'

export default () => {
  function toggleSection(e){
    e.classList.toggle('open')
  }
  return(
  <Layout>
    <ExpandingSections>
      <div className="expandingSection">
        <button className="link--icon" onClick={(e) => {e.target.classList.toggle("open")}}>
          <h3 className="subheading">
            GCSES
          </h3>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
        </button>
        <div className='expandingSection--child'>
          {qualifications.gcses.map(gcse => (
            <Qualification>
              <p className="qualification__title">{gcse.title}</p>
              <p className="qualification__grade">{gcse.grade}</p>
            </Qualification>
          ))}
        </div>
      </div>

      <div className="expandingSection">
        <button className="link--icon" onClick={(e) => {e.target.classList.toggle("open")}}>
          <h3 className="subheading">
            Software development training
          </h3>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
        </button>
        <div className='expandingSection--child'>
          {qualifications.software.map(soft => (
            <Qualification>
              <p className="qualification__title">{soft.title}</p>
              <p className="qualification__grade">{soft.grade}</p>
            </Qualification>
          ))}
        </div>
      </div>
    </ExpandingSections>
  </Layout>
)}
