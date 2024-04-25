import { useEffect, useState } from 'react'
import { Attention, ButtonSet } from '../components'
import { asideMenuProgramsLinks } from '../constants/navigation';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { author, prog01 } from '../assets';

const ProgramsLayout = () => {
  const location = useLocation();
  const [title, setTitle] = useState("ENGLISH FOR SPEAKERS  OF OTHER LANGUAGES")
  const [coverImage, setCoverImage] = useState (prog01)

  const coverSwitcher = (title: string) => {
    const coverData = asideMenuProgramsLinks.filter(link => link.title === title)[0]
    coverData.title && setTitle(coverData.title)
    coverData.image && setCoverImage(coverData.image)
  }

  useEffect (() => {
    const coverData = asideMenuProgramsLinks.filter(link => link.path === location.pathname)[0]
    coverSwitcher(coverData.title)
  },[])

  return (
    <div className='main-container'>
      <Attention/>
      <section className="cover">
        <div className="imgBox">
          <img src={coverImage} alt="Orange Literacy Image"/>
        </div>
        <div className="textBox">
          <h2>{title}</h2>
          <a className="mainButton" href='https://orangeliteracy.my.site.com/studentapp/s/' target='_blank'>
            <button>SIGN UP NOW </button>
          </a>
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
                    {asideMenuProgramsLinks.map( link => {
                      const isActive = location.pathname === link.path || (link.path === "/" && location.pathname === "");
                      return (
                          <Link key={link.title} to={link.path} className={isActive? "active aside-menu" : "aside-menu"} onClick={()=>coverSwitcher(link.title)}>
                            <div >{link.title}</div>
                          </Link>
                      )}
                    )}
                  </ul>
                </nav>
              <div className="decor-line"></div>
              <div className="aside-ButtonBox">
                <a className="mainButton" href='https://orangeliteracy.my.site.com/studentapp/s/' target='_blank'>
                  <button>SIGN UP NOW </button>
                </a>
              </div>
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

export default ProgramsLayout