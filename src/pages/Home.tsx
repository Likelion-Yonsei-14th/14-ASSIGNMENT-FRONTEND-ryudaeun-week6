import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-16 bg-yellow-300">
      <h1 className="text-3xl font-bold text-blue-600">
        Mini Shopping Mall
      </h1>

      <p className="text-green-600 mt-3 mb-6">
        React + TypeScript + Tailwind + Router + Zustand
      </p>

      <button
        onClick={() => navigate("/products")}
        className="bg-red-600 hover:bg-red-700 text-white
          font-medium px-6 py-2.5 rounded-lg transition"
      >
        상품 보러가기
      </button>
    </div>
  );
}
