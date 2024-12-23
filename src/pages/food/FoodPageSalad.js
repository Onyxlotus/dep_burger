import Burgers from "../../components/burgers/Burgers";

import { saladList } from "../../helpers/saladList";

import "./style.css";


const FoodPageSalad = () => {

    return (

        <ul className="catalog_list">
            {saladList.map((food)=>{
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
 
export default FoodPageSalad;