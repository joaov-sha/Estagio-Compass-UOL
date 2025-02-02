import css from './Form.module.css';

function SearchForm(){
    return(
        <div className={css.greetings}>
            <p>Hi, fulano</p>
            <h3>What are you looking for today?</h3>
        </div>
    )
}

export default SearchForm;