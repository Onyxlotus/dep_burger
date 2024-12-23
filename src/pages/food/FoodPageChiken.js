import Burgers from "../../components/burgers/Burgers";

import { chikenList } from "../../helpers/chikenList";

import "./style.css";


const FoodPageChiken = () => {

    return (

        <ul className="catalog_list">
            {chikenList.map((food)=>{
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
 
export default FoodPageChiken;