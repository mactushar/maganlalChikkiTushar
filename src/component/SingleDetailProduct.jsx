import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./utils/getAllProducts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./rtk/slice/cartSlice";
import toast from "react-hot-toast";

const SingleDetailProduct = () => {
  const { id, catid } = useParams();
  const dispatch = useDispatch();

  const { data = [], isLoading } = useQuery({
    queryKey: ["product", catid],
    queryFn: () => getProducts(catid),
    enabled: !!catid,
  });

  const product = data?.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p>Product not found</p>;

  const relatedProducts = data.filter((p) => p.id !== id).slice(0, 4);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      }),
    );

    toast.custom((t) => (
      <div className="bg-white dark:bg-gray-800 p-3 border rounded shadow flex gap-3 items-center">
        <span className="dark:text-white">Added to cart </span>

        <Link
          to="/cart"
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => toast.dismiss(t.id)}
        >
          Go to Cart
        </Link>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg grid md:grid-cols-2 gap-10 p-6">
        <div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={activeImage}
              alt={product?.title}
              className="w-full object-cover hover:scale-110 transition duration-300"
            />
          </div>

          <div className="flex gap-3 mt-4">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setActiveImage(img)}
                className="w-20 h-20 object-cover rounded cursor-pointer border hover:border-orange-500"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {product.title}
          </h1>

          <p className="text-2xl text-green-600 font-semibold mb-3">
            ₹{product.price}
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.small_description}
          </p>

          <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
            {product.full_description}
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                handleAddToCart();
                toast.success("Proceeding to checkout 🚀");
              }}
              className="border border-gray-400 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {relatedProducts?.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-3 hover:shadow-lg transition"
            >
              <img
                src={item?.images[0]}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="mt-2 text-sm font-medium text-gray-800 dark:text-white">
                {item.title}
              </h3>

              <p className="text-green-600 font-semibold">₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleDetailProduct;
