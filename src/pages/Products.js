import React from "react";
import { useEffect, useState } from "react";
import ProductItem from "../components/molecules/ProductItem";
import { fetchProductData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import loadingGIF from "../images/icons/loading.gif";
import Modal from "../components/atoms/Modal";

const Products = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);

  const [selectImage, setSelectImage] = useState(null);
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div className="products">
      <h1 className="page-title">Produk Kami</h1>
      <div className="products-list">
        {product.product.length < 1 ? (
          <img src={loadingGIF} alt="loading-gif" />
        ) : (
          product.product[0].map((item, i) => {
            return (
              <ProductItem
                key={i}
                name={item.name}
                price={item.price}
                id={item.id}
                setSelectImage={setSelectImage}
              />
            );
          })
        )}
      </div>
      {selectImage && (
        <Modal setSelectImage={setSelectImage} selectImage={selectImage} />
      )}
    </div>
  );
};

export default Products;
