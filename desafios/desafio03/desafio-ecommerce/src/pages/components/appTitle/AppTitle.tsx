import css from './Title.module.css';

function AppTitle(){
    return(
        <>
            <div className={css.titulo}>
                <h1>
                    Audio
                </h1>
                <p>
                    It's modular and designed to last
                </p>
            </div>
        </>
    )
}

export default AppTitle