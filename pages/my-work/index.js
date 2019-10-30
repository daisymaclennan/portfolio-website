import Layout from '../../components/Layout'
import ExpandingSections from '../../components/ExpandingSections'
import Projects from '../../components/Projects'
import myWork from '../../static/myWork'
import React, {useState} from 'react'

export default () => {
  const [activeDrops, setActiveDrops] = useState([])

  return(
    <Layout>
      <Projects>
        {myWork.map(work => (
          <div className="project" key={work.slug}>
            <h3 className="subheading">
              {work.title}
            </h3>
            <h5>
              {work.time_period}
            </h5>

            <ExpandingSections>
              <div className={`expandingSection`}>
                <button className="link--icon" onClick={(e) => {e.target.classList.toggle("open")}}>
                  Read more
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </button>
                  <div class='expandingSection--child'>
                    <p>
                      {work.description}
                    </p>
                  </div>
              </div>

              <div className="expandingSection">
                <button className="link--icon" onClick={(e) => {e.target.classList.toggle("open")}}>
                  Gallery
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </button>
                <div className='expandingSection--child'>
                  <div className="siema">
                    {work.img.map(i => (
                      <a href={`/static/img/${i.filename}`}>
                        <img src={`/static/img/${i.filename}`} alt={`${i.alt}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ExpandingSections>

          </div>
        ))}
      </Projects>
    </Layout>
)
}
