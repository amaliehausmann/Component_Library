import { NavLink } from "react-router-dom";
import style from './NavBar.module.scss';

//NavBar der tager i mod et array og mapper det ud
export const NavBar = ({ array }) => {
  return (
    <nav className={style.navStyling}>
      <ul>
        {array?.map((item) => (
          <li key={item.name}>
            <NavLink 
              to={item.link} 
              //Ternary operator til at vælge hvilken klasse der er gældende på navLinket
              className={({ isActive }) => (isActive ? style.activeLink : '')}
            >
              {item.name}
            </NavLink>  
          </li>
        ))}
      </ul>
    </nav>
  );
};
