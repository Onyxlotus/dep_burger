const Burgers = (props) => {



    return ( 
        <div className="catalog_item_div">
            <li className="catalog_item">
                <img src={props.img} alt={props.title} className="catalog_img"   width="450" height="350" />
                <button className="catalog_btn_buy">
                    Заказать
                </button>
                <p className="catalog_text">{props.title}</p>
            </li>
        </div>        
     );
}
 
export default Burgers;