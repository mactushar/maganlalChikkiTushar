import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "./rtk/slice/cartSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed");
  };

  const handleClear = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
      
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
        <ShoppingCart /> My Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
             “Add some sweetness to your cart 🍯”
            </p>
          ) : (
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 
                  bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
                >
                 
                  <div className="flex items-center gap-4 w-full">
                    <img
                      src={item?.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    <div>
                      <h3 className="font-semibold dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                 
                  <div className="flex items-center gap-4">
                   
                    <select
                      value={item.quantity}
                      onChange={(e) => {
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Number(e.target.value), 
                          }),
                        );
                        toast.success("Quantity updated");
                      }}
                      className="border px-2 py-1 rounded 
                      dark:bg-gray-700 dark:text-white"
                    >
                      {[1, 2, 3, 4, 5].map((el) => (
                        <option key={el} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>

                   
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-fit sticky top-20">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">
            PRICE DETAILS
          </h2>

          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Price ({cart.length} items)</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500">- ₹0</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-500">FREE</span>
            </div>
          </div>

          <hr className="my-4 border-gray-300 dark:border-gray-700" />

          <div className="flex justify-between font-bold text-lg dark:text-white">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>

          <button
            className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 
            text-black font-semibold py-2 rounded transition"
            onClick={() => toast.success("Order placed 🚀")}
          >
            PLACE ORDER
          </button>

          <button onClick={handleClear} className="w-full mt-3 text-red-500">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
