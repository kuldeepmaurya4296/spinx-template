export default function StyleGuide({ colors, typography }) {
  return (
    <div className="px-4 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Color Palette */}
      <div className="border p-4 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          {colors.slice(0, 2).map((color, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-12 sm:p-16 ${
                color.name === "White" ? "border text-black" : "text-white"
              }`}
              style={{ backgroundColor: color.hex }}
            >
              <p className="text-center text-sm sm:text-base">
                {color.hex}
                <br />
                {color.name}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {colors.slice(2).map((color, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 sm:p-8"
              style={{ backgroundColor: color.hex, color: color.textColor }}
            >
              <p className="text-center text-sm sm:text-base">
                {color.hex}
                <br />
                {color.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="border p-6 sm:p-8 flex flex-col justify-center">
        {typography.map((font, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 items-center mt-6 sm:mt-8">
            <p className={`text-4xl sm:text-6xl ${font.weight}`}>Aa</p>
            <p className={`text-sm sm:text-lg ${font.weight}`}>{font.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
