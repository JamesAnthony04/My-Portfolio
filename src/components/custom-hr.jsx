import React from 'react';

const CustomHR = () => {
  return (
    <div className="flex w-full my-2">
      <div className="w-[6rem] relative h-1 bg-blue-900 rounded-full overflow-hidden hover:bg-blue-800">
        <div className="absolute inset-0 animate-[shine_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>
    </div>
  );
};

const shimmerKeyframes = {
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' }
};

export default CustomHR;