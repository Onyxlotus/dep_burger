import Burgers from "../../components/burgers/Burgers";

import { snacksList } from "../../helpers/snacksList";

import "./style.css";


const FoodPageSnacks = () => {

    return (

        <ul className="catalog_list">
            {snacksList.map((food)=>{
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
 
export default FoodPageSnacks;