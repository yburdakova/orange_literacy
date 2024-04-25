import '../styles/InfoPage.css'
import '../styles/MainPage.css'
import { author, coverAbout } from '../assets'
import { asideMenuAboutLinks } from '../constants/navigation'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Attention, ButtonSet } from '../components'


const AboutLayout = () => {
  const location = useLocation();

  return (
    <div className="main-container">
      <Attention/>
      <section className="cover">
        <div className="imgBox">
          <img src={coverAbout} alt="Orange Literacy Image"/>
        </div>
        <div className="textBox">
          <h2>Free literacy programs for adults and families</h2>
          <p className="subtitle">Orange Literacy has been creating better lives through learning. With the generous support of our local community, students gain economic self-sufficiency and a brighter future for themselves and their families.</p>
        </div>
        <div id="moveTop" className="container">
          <ButtonSet/>
        </div>
      </section>
      <section>
      <div className="container">
        <div className="infoBox">
          <Outlet />
          <aside className="right-block">
            <div className="decor-line"></div>
              <nav className="right-menu menu">
                <ul>
                  {asideMenuAboutLinks.map( link => {
                    const isActive = location.pathname === link.path || (link.path === "/" && location.pathname === "");
                    return (
                      <Link to={link.path} className={isActive? "active aside-menu" : "aside-menu"}>
                        <div >{link.title}</div>
                      </Link>
                    )}
                  )}
                </ul>
              </nav>
            <div className="decor-line"></div>
            <h3>CONTACT</h3>
            <div className="author-card">
              <div className="author-data">
                <div className="author-text">
                  <div className="author-name">Maria ADAMS</div>
                  <div className="author-position">Director of Marketing and Communications</div>
                </div>
                <div className="author-img">
                  <img src={author} alt="author photo"/>
                </div>
              </div>
              <div className="author-contact-item"><a href="tel:+19846722146" type='phone'>984-672-21-46</a></div>
              <div className="author-contact-item"><a href="mailto:maria_adams@orangeliteracy.org" type='email'>maria_adams@orangeliteracy.org</a></div>
            </div>
          </aside>
        </div>
      </div>
      </section>
    </div>

  )
}

export default AboutLayout