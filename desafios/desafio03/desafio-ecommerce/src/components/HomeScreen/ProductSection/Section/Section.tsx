import React, { useEffect, useState } from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import HighlightProduct from "../HighlightProduct/HightlightProduct";
import axios from "axios";
import css from './ShowcaseSection.module.css';

function Section(){
    const [featuredProduct, setFeaturedProduct] = useState(null);
    const [highlightProducts, setHighlightProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await axios.get("https://run.mocky.io/v3/6330384b-4d57-4d79-9981-2afe53969c7b");
                const products = response.data;

                setFeaturedProduct(products[0]);
                setHighlightProduct(products.slice(1));
            } catch (error){
                console.error("Erro ao receber produtos da API: ", error);
            }
        }

        fetchProducts();
    }, []);
    return(
        <div className={css.show}>
            {featuredProduct && <FeaturedProduct product={featuredProduct} />}
            <HighlightProduct products={highlightProducts}/>
        </div>
    )
}

export default Section