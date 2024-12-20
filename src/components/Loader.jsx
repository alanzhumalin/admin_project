const Loader = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      <p className="ml-4 text-blue-500 font-semibold">Loading...</p>
    </div>
  );
};

export default Loader;
