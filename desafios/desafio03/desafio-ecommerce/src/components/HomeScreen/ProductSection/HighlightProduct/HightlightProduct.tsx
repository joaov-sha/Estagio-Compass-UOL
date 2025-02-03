import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import css from "./Highlight.module.css";

interface Product {
  id: string;
  name: string;
  description?: string;
  img: string;
  price: number;
  category: string;
}

interface HighlightProductsProps {
  products: Product[];
}

const HighlightProducts: React.FC<HighlightProductsProps> = ({ products }) => {
  if (products.length === 0) {
    return <p className={css.noProducts}>Nenhum produto encontrado para esta categoria.</p>;
  }

  return (
    <div className={css.carouselContainer}>
      <h4>Featured Products</h4>
      <button className={css.seeAllButton}>See All</button>
      <Swiper slidesPerView={2.2} spaceBetween={10} className={css.swiper}>
        {products.map((product) => (
          <SwiperSlide key={product.id} className={css.slide}>
            <div className={css.productCard}>
              <img src={product.img} alt={product.name} className={css.image} />
              <h5 className={css.productName}>{product.name}</h5>
              <p className={css.price}>USD {product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HighlightProducts;
