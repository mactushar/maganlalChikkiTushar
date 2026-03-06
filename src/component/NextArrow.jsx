import { ChevronRight,ChevronLeft } from 'lucide-react';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl select-none"
    onClick={onClick}
  >
    <ChevronRight className="w-10 h-10"/>
  </div>
);

export default NextArrow