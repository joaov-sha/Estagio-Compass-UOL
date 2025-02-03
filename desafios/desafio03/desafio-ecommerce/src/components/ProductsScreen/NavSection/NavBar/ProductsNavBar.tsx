import FeatherIcon from "feather-icons-react";
import css from "./ProductsNav.module.css";

function ProductsNavBar(){
    return(
        <nav className={css.productsNav}>
            <ul>
                <li>
                    <button>
                        <FeatherIcon icon="chevron-left" className={css.icon}/>
                    </button>
                </li>
                <li>
                    <button>
                        <FeatherIcon icon="shopping-cart" className={css.icon}/>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default ProductsNavBar