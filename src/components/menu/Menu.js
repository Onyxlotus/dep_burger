import { NavLink } from "react-router-dom";

const Menu = (props) => {


    return (
        <NavLink to={`/menu/${props.id}`}>
            <div className="catalog_item_div">
                <li className="catalog_item">
                    <img src={props.img} alt={props.title} className="catalog_img"   width="450" height="350" />
                    <p className="catalog_text">{props.title}</p>
                </li>
            </div>
        </NavLink> 

     );
}
 
export default Menu;