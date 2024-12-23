import Burgers from "../../components/burgers/Burgers";

import { hotFoodList } from "../../helpers/hotFoodList";

import "./style.css";


const FoodPageHotFood = () => {

    return (

        <ul className="catalog_list">
            {hotFoodList.map((food)=>{
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
 
export default FoodPageHotFood;