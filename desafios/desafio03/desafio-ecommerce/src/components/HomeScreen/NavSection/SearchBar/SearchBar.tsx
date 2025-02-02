import FeatherIcon from 'feather-icons-react';
import css from './Research.module.css';

function SearchForm(){
    return(
        <div className={css.search}>
            <button>
                <FeatherIcon icon="search" className={css.icon}/>
                <span className={css.button}>Search headphone</span>
            </button>
        </div>
    )
}

export default SearchForm