import { useDispatch } from "react-redux";
import { applyFilters } from "../rtk/slice/ProductFilterSlice";

const useApplyFilters = () => {
  const dispatch = useDispatch();

  return () => {
    dispatch(applyFilters());
  };
};

export default useApplyFilters;