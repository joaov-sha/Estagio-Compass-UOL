import { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import css from "./Menu.module.css";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão do Menu */}
      <button className={css.menuButton} onClick={toggleMenu}>
        <FeatherIcon icon="menu" size={30} />
      </button>

      {/* Fundo escurecido */}
      <div className={`${css.backdrop} ${isOpen ? css.show : ""}`} onClick={toggleMenu}></div>

      {/* Barra Lateral */}
      <div className={`${css.sidebar} ${isOpen ? css.show : ""}`}>
        <button className={css.closeButton} onClick={toggleMenu}>
          <FeatherIcon icon="x" size={30} />
        </button>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/search" onClick={toggleMenu}>Search</Link></li>
          <li><Link to="/shoppingCart" onClick={toggleMenu}>Cart</Link></li>
          <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
        </ul>
      </div>
    </>
  );
};

export default MenuHamburger;
