import Menu from "../../components/menu/Menu";

import { menuFood } from "../../helpers/menuList";

const FoodMenu = () => {
    return (
        <section className="menu_content">
            <h1 className="menu">Меню</h1>
            <ul className="catalog_list">

                    {menuFood.map((food)=>{
                        return <Menu 
                            key={food.id} 
                            title={food.title} 
                            img={food.img} 
                            id={food.id}
                        />;
                    })} 
            </ul>
        </section>
     );
}
 
export default FoodMenu;