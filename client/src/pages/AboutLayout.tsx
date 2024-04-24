import '../styles/InfoPage.css'
import { author } from '../assets'
import { asideMenuAboutLinks } from '../constants/navigation'
import { Link, Outlet, useLocation } from 'react-router-dom'

const AboutLayout = () => {
  const location = useLocation();

  return (
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
                    <Link to={link.path} className={isActive? "active" : ""}>
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
  )
}

export default AboutLayout