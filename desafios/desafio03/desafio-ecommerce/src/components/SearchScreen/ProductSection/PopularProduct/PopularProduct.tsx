import React, { useEffect, useState } from "react";
import axios from "axios";
import css from "./Popular.module.css";
import FeatherIcon from "feather-icons-react";

interface Review{
  rating: number;
}

interface Product {
  id: string;
  name: string;
  price: string;
  img: string;
  rating: number;
  popularity: number;
  reviews: Review[];
}

interface PopularProductProps {
  searchTerm: string;
}

const PopularProduct: React.FC<PopularProductProps> = ({ searchTerm }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/6330384b-4d57-4d79-9981-2afe53969c7b"
        );

        const sortedProducts = response.data.sort(
          (a: Product, b: Product) => b.popularity - a.popularity
        );
        setProducts(sortedProducts);
        setFilteredProducts([]);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const calculateAverageRating = (reviews: Review[]) =>{
    if(reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  }

  return (
    <div className={css.popularProducts}>
      {searchTerm && (
        <div className={css.searchResults}>
          <h4>Search Results</h4>
          <ul className={css.productList}>
            {filteredProducts.map((product) => (
              <li key={product.id} className={css.productItem}>
                <img
                  src={product.img}
                  alt={product.name}
                  className={css.productImage}
                />
                <div className={css.productDetails}>
                  <h5>{product.name}</h5>
                  <p>USD {product.price}</p>
                  <div className={css.rating}>
                    <FeatherIcon icon="star" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {filteredProducts.length === 0 && (
            <p className={css.noResults}>No products found.</p>
          )}
        </div>
      )}

      <h4>Popular Products</h4>
      <ul className={css.productList}>
        {products.map((product) => (
          <li key={product.id} className={css.productItem}>
            <img
              src={product.img}
              alt={product.name}
              className={css.productImage}
            />
            <div className={css.productDetails}>
              <h5>{product.name}</h5>
              <p>USD {product.price}</p>
              <div className={css.evaluation}>
                <FeatherIcon icon="star" className={css.rating}/>
                <span>{calculateAverageRating(product.reviews)}</span>
                <span className={css.reviews}>{product.reviews.length} Reviews</span>
                <button className={css.moreButton}>
                  <FeatherIcon icon="more-vertical"/>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularProduct;
