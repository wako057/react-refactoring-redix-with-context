// import React from "react";

import { createContext, useState } from "react";

export const ProductContext = createContext({
    product: []
});


export default function ProductContextProvider(props) {
    const [productsList, setProductsList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        },
    ]);

    const ctxValue = {
        products: productsList
    };

    return (
        <ProductContext.Provider value={ctxValue}>
            {props.children}
        </ProductContext.Provider>
    );
};