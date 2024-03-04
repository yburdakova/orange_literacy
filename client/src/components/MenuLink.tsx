
import { Link, useLocation } from 'react-router-dom';
import { MenuItemProps } from '../constants/types';

const MenuLink = ({title, path, onClick}: MenuItemProps) => {

  const location = useLocation();
  const isActive = location.pathname === path || (path === "/" && location.pathname === "");

  return (
    <Link to={path} className={isActive? "active" : ""}>
      <li onClick={onClick}>
        <div >{title}</div>
      </li>
    </Link>
  )
}

export default MenuLink