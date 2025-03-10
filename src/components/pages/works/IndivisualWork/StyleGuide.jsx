export default function StyleGuide() {
    return (
      <div className="px-4 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Color Palette */}
        <div className="border p-4 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black text-white flex items-center justify-center p-12 sm:p-16">
              <p className="text-center text-sm sm:text-base">#000000<br />Black</p>
            </div>
            <div className="bg-white text-black border flex items-center justify-center p-12 sm:p-16">
              <p className="text-center text-sm sm:text-base">#FFFFFF<br />White</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-gray-700 text-white flex items-center justify-center p-6 sm:p-8">
              <p className="text-center text-sm sm:text-base">#989898<br />Dark Grey</p>
            </div>
            <div className="bg-gray-400 text-black flex items-center justify-center p-6 sm:p-8">
              <p className="text-center text-sm sm:text-base">#DADADA<br />Grey</p>
            </div>
            <div className="bg-gray-200 text-black flex items-center justify-center p-6 sm:p-8">
              <p className="text-center text-sm sm:text-base">#F0F0F0<br />Light Grey</p>
            </div>
          </div>
        </div>
  
        {/* Typography */}
        <div className="border p-6 sm:p-8 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 items-center">
            <p className="text-4xl sm:text-6xl font-normal">Aa</p>
            <p className="text-sm sm:text-lg">Roboto Regular</p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center mt-6 sm:mt-8">
            <p className="text-4xl sm:text-6xl font-bold">Aa</p>
            <p className="text-sm sm:text-lg font-bold">Roboto Bold</p>
          </div>
        </div>
      </div>
    );
  }
  