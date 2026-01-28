import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header class="fond">
      <div className="header">
        <h1 class="header__titre">FocusMind</h1>
        <Link to="/parametre">
          <ion-icon name="settings-outline"></ion-icon>
        </Link>
      </div>
      <h3 class="slogan">
        La ToDoList intelligente qui te permet de te focus sur ce qui est
        vraiment important
      </h3>
    </header>
  );
};
export default Header;
