import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import css from "./Highlight.module.css";

interface Product {
  id: string;
  name: string;
  description: string;
  img: string;
  price: string;
}

interface HighlightProductsProps {
  products: Product[];
}

const HighlightProducts = ({ products }: HighlightProductsProps) => {
  return (
    <div className={css.carouselContainer}>
      <h4>Featured Products</h4>
      <Swiper slidesPerView={2.5} spaceBetween={10} className={css.swiper}>
        {products.map((product) => (
          <SwiperSlide key={product.id} className={css.slide}>
            <div className={css.productCard}>
              <img src={product.img} alt={product.name} className={css.image} />
              <h5>{product.name}</h5>
              <p>{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HighlightProducts;