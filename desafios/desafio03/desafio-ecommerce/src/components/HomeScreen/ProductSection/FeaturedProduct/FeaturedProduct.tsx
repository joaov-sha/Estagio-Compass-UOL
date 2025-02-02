import FeatherIcon from "feather-icons-react";
import css from "./Featured.module.css";

interface Product {
  id: string;
  name: string;
  description: string;
  img: string;
  price: string;
}

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  return (
    <div className={css.featuredContainer}>
      <div className={css.details}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button className={css.shopNow}>
          Shop now <FeatherIcon icon="arrow-right" size={16} />
        </button>
      </div>
      <img src={product.img} alt={product.name} className={css.image} />
    </div>
  );
};

export default FeaturedProduct;