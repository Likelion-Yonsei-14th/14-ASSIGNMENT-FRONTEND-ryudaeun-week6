import { Link } from "react-router-dom";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onSelect: (id: number) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-xl shadow
        hover:shadow-lg transition
        overflow-hidden group"
      onClick={() => onSelect(product.id)}
    >
      <div className="overflow-hidden">
        <img
  src={product.image}
  alt={product.name}
  className="w-full h-32 object-cover
    group-hover:scale-105
    transition duration-300"
/>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="text-blue-600 font-bold mt-1">
          {product.price.toLocaleString()}원
        </p>
      </div>
    </Link>
  );
}