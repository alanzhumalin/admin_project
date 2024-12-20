const LowStockWarning = ({ message }) => {
    return (
      <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        {message}
      </div>
    );
  };
  
  export default LowStockWarning;
  