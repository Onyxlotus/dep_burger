import Burgers from "../../components/burgers/Burgers";

import { promotionsList } from "../../helpers/promotionsList";

import "./style.css";

const Promotions = () => {
    return ( 
        <ul className="catalog_list">
            {promotionsList.map((food)=>{
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
 
export {Promotions};