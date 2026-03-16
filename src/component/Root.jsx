import { Toaster } from "react-hot-toast";
import App from "../App";
import { useTheme } from "./hooks/useTheme";

const Root = () => {
  const { dark } = useTheme();

  return (
    <>
      <Toaster
        key={dark ? "dark" : "light"}
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          removeDelay: 200,
          style: {
            background: dark ? "#0f172a" : "#ffffff",
            color: dark ? "#f8fafc" : "#020617",
            border: dark ? "1px solid #334155" : "1px solid #e2e8f0",
          },
        }}
      />
      <App />
    </>
  );
};

export default Root;
