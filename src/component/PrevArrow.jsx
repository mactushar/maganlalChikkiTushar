import React from 'react'
import { ChevronRight,ChevronLeft } from 'lucide-react';

const PrevArrow = () => {
  const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl select-none"
    onClick={onClick}
  >
    <ChevronLeft className="w-10 h-10"/>
  </div>
);
}

export default PrevArrow