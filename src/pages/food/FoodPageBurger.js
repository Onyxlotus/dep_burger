import Burgers from "../../components/burgers/Burgers";

import { burgersList } from "../../helpers/burgersList";

import "./style.css";


const FoodPageBurger = () => {

    return (

        <ul className="catalog_list">
            {burgersList.map((food)=>{
                return <Burgers 
                    key={food.id} 
                    title={food.title} 
                    img={food.img} 
                    id={food.id}
                    />;
            })} 

        </ul>

     );
}
 
export default FoodPageBurger;