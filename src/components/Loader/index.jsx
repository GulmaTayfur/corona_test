const Loader = () => {
  const arr = new Array(16).fill("a");
  return arr.map((item, index) => (
    <div
      key={index}
      data-testid="card-loader"
      className="h-[88px] bg-gray-200 p-4 rounded-lg shadow-md text-gray-600 min-w-[218px] animate-pulse"
    >
      <p className="bg-gray-300 mb-5 h-2 rounded w-1/3" />
      <h2 className=" bg-gray-400 h-3 rounded w-1/2" />
    </div>
  ));
};

export default Loader;
