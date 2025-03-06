export default function WeAreSection() {
    return (
      <section className=" py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center">
          {/* Left Section */}
          <div className="md:w-3/5">
            <h1 className="text-5xl md:text-9xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 text-transparent bg-clip-text">
                We are
              </span>
            </h1>
            <h2 className="text-4xl font-bold mt-4">
              Creative Designers, <br /> Insightful Strategists, and <br /> Exceptional Engineers
            </h2>
            <p className="text-gray-400 mt-6 text-lg">
              We are SPINX Digital in Los Angeles and as innovators in creative website design & digital marketing, we build awesome digital masterpieces!
            </p>
          </div>
          {/* Right Section */}
          <div className="md:w-2/5 mt-8 md:mt-0 flex flex-col gap-8 md:gap-20 md:ml-16">
            <div>
              <h3 className="text-3xl md:text-7xl  font-bold">18+</h3>
              <p className="text-gray-400">Years in business</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-7xl  font-bold">250+</h3>
              <p className="text-gray-400">Websites & projects launched</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-7xl  font-bold">30+</h3>
              <p className="text-gray-400">Awards & recognition</p>
            </div>
          </div>
        </div>
      </section>
    );
  }