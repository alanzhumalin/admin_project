const SearchBar = ({ searchQuery, setSearchQuery, searchType, setSearchType, handleSearch }) => {
  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
      <input
        type="text"
        placeholder="Search by username, email, or user ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        style={{ height: '48px' }} 
      />

      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 appearance-none"
        style={{ height: '48px' }} 
      >
        <option value="username">Username</option>
        <option value="email">Email</option>
        <option value="userId">User ID</option>
      </select>

      
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto hover:bg-blue-600 transition"
        style={{ height: '48px' }} 
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
