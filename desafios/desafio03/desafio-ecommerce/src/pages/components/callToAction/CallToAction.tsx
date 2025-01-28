import css from './CallAction.module.css';

function CallToAction(address:string, props: String, props2: String){
    return(
        <>
            <div className={css.call}>
                <p>{props}<a href={address}>{props2}</a></p>
            </div>
        </>
    )
}

export default CallToAction