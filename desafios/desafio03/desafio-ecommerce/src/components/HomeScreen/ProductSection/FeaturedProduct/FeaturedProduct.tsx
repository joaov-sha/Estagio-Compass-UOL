import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import FeatherIcon from "feather-icons-react";
import css from "./Featured.module.css";

interface Product {
  id: string;
  name: string;
  description?: string;
  img: string;
  price: number;
  category: string;
}

interface FeaturedProductProps {
  products: Product[];
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ products }) => {
  if (products.length === 0) {
    return <p className={css.noProducts}>Nenhum produto encontrado para esta categoria.</p>;
  }

  return (
    <div className={css.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: false }}
        spaceBetween={20}
        slidesPerView={1}
        className={css.swiper}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className={css.slide}>
            <div className={css.featuredContainer}>
              <div className={css.productContainer}>
              <div className={css.details}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <div>
                <button className={css.shopNow}>
                    Shop now <FeatherIcon icon="arrow-right" size={16} />
                </button>
              </div>
              </div>
              <div className={css.imageContainer}>
                <img src={product.img} alt={product.name} className={css.image} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default FeaturedProduct;
