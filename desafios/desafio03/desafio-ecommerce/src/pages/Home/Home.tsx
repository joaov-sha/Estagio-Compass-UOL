import NavBar from "../../components/HomeScreen/NavSection/NavBar/NavBar"
import SearchForm from "../../components/HomeScreen/NavSection/SearchForm/SearchForm";
import SearchBar from "../../components/HomeScreen/NavSection/SearchBar/SearchBar";
import css from './Home.module.css';
import Section from "../../components/HomeScreen/ProductSection/Section/Section";
function Home(){
    return(
        <div className={css.home}>
            <NavBar/>
            <SearchForm/>
            <SearchBar/>
            <Section/>
        </div>
    )
}

export default Home