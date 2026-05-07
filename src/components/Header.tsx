import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

export default function Header() {
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="bg-stone-50 border-b border-stone-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* 로고 */}
        <Link
          to="/"
          className="text-2xl font-bold text-red-700 tracking-tight visited:text-red-700"
        >
          🛍️ Mini Mall
        </Link>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-6 text-base font-medium">

          <Link
            to="/products"
            className="text-stone-600 hover:text-red-600 visited:text-stone-600 transition"
          >
            상품
          </Link>

          <Link
            to="/cart"
            className="relative text-stone-600 hover:text-red-600 visited:text-stone-600 transition"
          >
            🛒 장바구니

            {cart?.length > 0 && (
              <span
                className="absolute -top-2 -right-4
                bg-red-600 text-white text-[10px]
                px-1.5 py-[2px] rounded-full
                flex items-center justify-center
                shadow-sm"
              >
                {cart.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
