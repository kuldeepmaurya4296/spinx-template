export default function RotatedBgComponent() {
    return (
      <div className="py-10">
        <div className="relative bg-gray-900 text-white overflow-hidden flex justify-center items-center h-48 md:h-64 lg:h-80 px-4 text-center">
        {/* Background rotated elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gray-800 rotate-45 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-800 rotate-45 translate-y-1/2 -translate-x-1/2"></div>
  
        {/* Centered text */}
        <p className="text-lg md:text-xl lg:text-4xl font-bold w-full px-4 md:max-w-2xl">
        BEGA's website lacked the innovation of their products, was outdated and confusing to navigate.        </p>
      </div>
      </div>
    );
  }
  