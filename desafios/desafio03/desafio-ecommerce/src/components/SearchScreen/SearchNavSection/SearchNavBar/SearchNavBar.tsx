import React, { ChangeEvent } from "react";
import FeatherIcon from "feather-icons-react";
import css from "./SearchNav.module.css";

interface SearchNavBarProps {
  onSearch: (term: string) => void;
}

const SearchNavBar: React.FC<SearchNavBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <nav className={css.searchNav}>
      <ul>
        <li>
          <button>
            <FeatherIcon icon="chevron-left" />
          </button>
        </li>
        <li>
          <h3>Search</h3>
        </li>
        <li>
          <button>
            <FeatherIcon icon="shopping-cart" />
          </button>
        </li>
      </ul>
      <div>
        <FeatherIcon icon="search" className={css.icon} />
        <input
          type="text"
          placeholder="Search headphone"
          onChange={handleInputChange}
        />
      </div>
    </nav>
  );
};

export default SearchNavBar;
