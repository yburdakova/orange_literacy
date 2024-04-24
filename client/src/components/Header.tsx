import logo from '../assets/logo-full-darkorange.svg'
import TranslateModule from './TranslateModule'
import { menuLinks } from '../constants/navigation'
import MenuLink from './MenuLink'
import { Link } from 'react-router-dom'
import { Burger } from '.'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
        <div className="container">
          <div className="top">
            <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" width={200} />
            </Link>
            </div>
            <div className="headerTools">
              <TranslateModule />
              <nav className='menu'>
                <ul className='menuBox'>
                  {menuLinks.map((link) =>
                    <MenuLink title={link.title} key={link.title} path={link.path}/>
                  )}
                </ul>
              </nav>
              <Burger/>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header