import React, { useState } from "react";
import SearchNavBar from "../../components/SearchScreen/SearchNavSection/SearchNavBar/SearchNavBar";
import PopularProduct from "../../components/SearchScreen/ProductSection/PopularProduct/PopularProduct";
import './SearchPage.module.css';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Estado do termo de busca

  return (
    <div>
      {/* Componente da barra de busca */}
      <SearchNavBar onSearch={setSearchTerm} />
      
      {/* Componente dos produtos populares */}
      <PopularProduct searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
