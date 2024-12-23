import { NavLink } from "react-router-dom";
import NavBar from "./../navbar/NavBar";

import burger from "./../../img/burger/burger_photo.png"
import "./style.css"

const Header = () => {
    return ( 
        <header className="page_header">

            <NavBar />
          
            <div className="header_info">
                <ul className="header_info_text">
                    <li>
                        <p className="first_text_header">
                            Быстрая доставка для Вас!
                        </p>
                    </li>
                    <li>
                        <p className="second_text_header">
                            Сделай первый заказ и получи скидку 50%
                        </p>
                    </li>
                    <li>
                        <NavLink to="/">
                            <button  className="button_to_buy" type="button">
                                    Заказать
                            </button>
                        </NavLink>
                    </li>
                </ul>

                <div>
                    <img src={burger} alt="burger" className="burger_img" width="500" height="480" />
                </div>
            </div>
      </header>
     );
}
 
export default Header;