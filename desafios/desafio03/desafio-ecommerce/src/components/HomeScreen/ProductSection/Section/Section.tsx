import { useEffect, useState } from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import HighlightProducts from "../HighlightProduct/HightlightProduct";
import axios from "axios";
import css from "./ShowcaseSection.module.css";
import ProductSelector from "../ProductSelector/ProductSelector";

interface Product {
  id: string;
  name: string;
  description?: string;
  img: string;
  price: number;
  category: string;
}

function Section() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("headphones");
  const [filteredFeaturedProducts, setFilteredFeaturedProducts] = useState<Product[]>([]);
  const [filteredHighlightProducts, setFilteredHighlightProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://run.mocky.io/v3/6330384b-4d57-4d79-9981-2afe53969c7b");
        const products: Product[] = response.data;

        setAllProducts(products);
        filterProducts(products, selectedCategory);
      } catch (error) {
        console.error("Erro ao receber produtos da API:", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (products: Product[], category: string) => {
    const filteredFeatured = products
      .filter((p) => p.category.toLowerCase() === category.toLowerCase())
      .slice(0, 1);

    const filteredHighlight = products
      .filter((p) => p.category.toLowerCase() === category.toLowerCase())
      .slice(1);

    setFilteredFeaturedProducts(filteredFeatured);
    setFilteredHighlightProducts(filteredHighlight);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProducts(allProducts, category);
  };

  return (
    <div className={css.show}>
      <ProductSelector
        categories={["headphones", "headsets"]}
        onSelect={handleCategoryChange}
      />

      {filteredFeaturedProducts.length > 0 ? (
        <FeaturedProduct products={filteredFeaturedProducts} />
      ) : (
        <p>Nenhum produto em destaque encontrado para esta categoria.</p>
      )}

      {filteredHighlightProducts.length > 0 ? (
        <HighlightProducts products={filteredHighlightProducts} />
      ) : (
        <p>Nenhum produto encontrado para esta categoria.</p>
      )}
    </div>
  );
}

export default Section;
