import FeatherIcon from 'feather-icons-react';
import css from './Research.module.css';
import { useNavigate } from "react-router-dom";

function SearchForm(){

    const navigate = useNavigate();

    return(
        <div className={css.search}>
            <button onClick={() => navigate("/search")}>
                <FeatherIcon icon="search" className={css.icon}/>
                <span className={css.button}>Search headphone</span>
            </button>
        </div>
    )
}

export default SearchForm