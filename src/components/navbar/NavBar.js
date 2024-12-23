import { NavLink } from "react-router-dom";

import logo from "./../../img/VF_logo.png"

import "./style.css"

const NavBar = () => {

    const activeLink = 'nav_item nav-item--active';
    const normalLink = 'nav_item';

    return ( 
        <nav className="navigation">
            <div className="small_list">  
                <NavLink to="/dep_burger" className="comp_logo">
                    <img src={logo} alt="logo" className="logo" />
                </NavLink>

              <ul className="nav_list">
                  <li>
                        <NavLink to="/dep_burger" className={({isActive})=>isActive ? activeLink : normalLink}>
                            Главная
                        </NavLink>
                  </li>
                  <li>
                        <NavLink to="/promotions" className={({isActive})=>isActive ? activeLink : normalLink}>
                            Акции
                        </NavLink>
                  </li>
                  <li>
                        <NavLink to="/about" className={({isActive})=>isActive ? activeLink : normalLink}>
                            О нас
                        </NavLink>
                  </li>
              </ul>
            </div>

              <button className="btn_buy" type="button" >
              </button>
          </nav>
     );
}
 
export default NavBar;