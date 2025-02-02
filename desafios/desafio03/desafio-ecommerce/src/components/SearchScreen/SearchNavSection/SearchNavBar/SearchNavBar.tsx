import FeatherIcon from "feather-icons-react";
import css from "./SearchNav.module.css";

function SearchNavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <button>
                        <FeatherIcon icon="chevron-left"/>
                    </button>
                </li>
                <li>
                    <h3>
                        Search
                    </h3>
                </li>
                <li>
                    <button>
                        <FeatherIcon icon="shopping-cart"/>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default SearchNavBar;