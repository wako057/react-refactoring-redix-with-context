import React, { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
// import { ProductContext } from '../context/product-context';
import { useStore } from '../hook-store/store';

const Products = props => {
  // const {products: productList} = useContext(ProductContext);
  const [state, dispatch] = useStore();
  // console.log(productList);
  console.log(state.products);
  // const productList = useSelector(state => state.shop.products);

  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
