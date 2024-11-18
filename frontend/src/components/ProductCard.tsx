import React from "react";
import { FaPlus } from "react-icons/fa";

type productProps = {
  productId: string;
  image: string;
  name: string;
  price: number;
  stock: number;
};

function ProductCard({productId, image, name, price, stock }: productProps) {
  return (
    <div className="productCard">
      <img src={image} alt={name} />

      <p>{name}</p> 
      <span>{price}</span>

      <div>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
