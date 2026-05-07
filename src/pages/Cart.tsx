import { useCartStore } from "../stores/cartStore";
import { Link } from "react-router-dom";

// props 0개!
export default function Cart() {
  const { cart, removeFromCart } = useCartStore();
  const total = cart.reduce(
    (sum, item) => sum + item.price, 0
  );
  return (
    <div>
      {cart.map(item => (
        <div>
          {item.name}
          <button onClick={
            () => removeFromCart(item.id)
          }>삭제</button>
        </div>
      ))}
      <Link to="/products">상품 보러가기</Link>
    </div>
  );
}

