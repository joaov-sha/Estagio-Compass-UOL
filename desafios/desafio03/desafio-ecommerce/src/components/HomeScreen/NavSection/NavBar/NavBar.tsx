import AppIcon from "../../../../assets/AppIcon.svg"
import userAvatar from "../../../../assets/userAvatar.jpeg"
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import css from "./Nav.module.css";

function NavBar(){
    return(
        <nav className={css.nav}>
            <div className="menu">
                <MenuHamburger/>
            </div>
            <div className={css.logo}>
                <img src={AppIcon} alt="Logomarca do aplicativo" />
                <h4>
                    Audio
                </h4>
            </div>
            <div className={css.profile}>
                <img src={userAvatar} alt="Foto de perfil do usuário" />
            </div>
        </nav>
    )
}

export default NavBar;