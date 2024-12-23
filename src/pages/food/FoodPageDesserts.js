import Burgers from "../../components/burgers/Burgers";

import { dessertsList } from "../../helpers/dessertsList";

import "./style.css";


const FoodPageDesserts = () => {

    return (

        <ul className="catalog_list">
            {dessertsList.map((food)=>{
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
 
export default FoodPageDesserts;