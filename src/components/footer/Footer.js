import telegram from "./../../img/Telegram_circled.png";
import vk from "./../../img/VK_circled.png"

import "./style.css";

const Footer = () => {
    return (  
        <footer className="page_footer">
            <ul className="footer_list">
                <li>
                    <a href="#" className="loyal">Программа лояльности</a>
                </li>
                <li>
                    <a href="#" className="loyal">Политика конфиденциальности</a>
                </li>
                <li>
                    <a href="#" className="loyal">Договор оферты</a>
                </li>
            </ul>
            <ul className="footer_text_list">
                <li>
                    <p className="footer_text">ООО "Vintage Food"</p>
                </li>
                <li>
                    <p className="footer_text">© Все права защищены</p>
                </li>
            </ul>
            <ul className="footer_contacts">
                <li>
                    <a href="#" className="footer_contacts_elem">
                        <img src={vk} alt="vk" width="45" height="45" />
                    </a>
                </li>
                <li>
                    <a href="#" className="footer_contacts_elem">
                        <img src={telegram} alt="telegram" width="50" height="50" />
                    </a>
                </li>
            </ul>
        </footer>  
    );
}
 
export default Footer;