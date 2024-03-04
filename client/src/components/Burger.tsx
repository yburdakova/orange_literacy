import  { useState } from 'react'
import '../styles/Header.css'
import { menuLinks } from '../constants/navigation';
import MenuLink from './MenuLink';

const Burger = () => {
  const [toggled, setToggled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMenuOpen = () => {
    if (toggled) {
      setIsActive(false);
      setTimeout(() => {
        setToggled (false)
      }, 150); 
    } else {
      setToggled (true)
      setTimeout(() => {
        setIsActive (true)
      }, 10); 
      
    }
  }
  const closeMenu = () => {
    setIsActive(false);
    setTimeout(() => {
      setToggled(false);
    }, 150);
  };
  
  return (
    <section className='burger_container'>
    <div className={`burger burger1 ${toggled ? 'toggled' : 'unToggled'}`}
      onClick={handleMenuOpen}>
      <div></div>
    </div>
    { toggled &&
      <aside className={isActive? "mobile_menu active" : "mobile_menu"}>
        <nav>
          <ul className='mobile_menuBox'>
            {menuLinks.map((link) => 
              <MenuLink title={link.title} key={link.title} path={link.path} onClick={closeMenu} />
            )}
          </ul>
        </nav>
      </aside>
    }
    
  </section>
  )
}

export default Burger