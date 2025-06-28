import { useState } from "react";
import { Grid3X3, Grid2X2, List } from "lucide-react"; // Make sure these icons are installed from lucide-react
import ProductCard from "./ProductCard";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpinner from "../shard/LoadingSpinner";
import ShopTitle from "../shard/shopTitle";
export default function ProductPage({
  products,
  category,
  isLoading,
  isError,
  sortOption,
  setSortOption,
  setSearch,
  search,
}) {
  const [view, setView] = useState("grid3"); // list | grid2 | grid3
  return (
    <div className="space-y-5">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
        <p className="text-sm text-gray-700 hidden md:flex">
          {products.length > 0 &&
            `Showing 1 - ${products.length} of ${products.length} Products`}
        </p>
        {/* View Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setView("grid3")}
            className={view === "grid3" ? "text-indigo-500" : "text-gray-400"}
          >
            <Grid3X3 size={20} />
          </button>
          <button
            onClick={() => setView("grid2")}
            className={view === "grid2" ? "text-indigo-500" : "text-gray-400"}
          >
            <Grid2X2 size={20} />
          </button>
          <button
            onClick={() => setView("list")}
            className={view === "list" ? "text-indigo-500" : "text-gray-400"}
          >
            <List size={20} />
          </button>
        </div>
        <select
          className="text-sm appearance-none text-indigo-900 bg-transparent outline-none"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="" disabled>
            Default Sorting
          </option>
          <option value="desc">Price High To Low</option>
          <option value="asc">Price Low To High</option>
          <option value="new">New Arrivals</option>
        </select>
      </div>
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={search}
            className="w-full"
            placeholder="Search..."
            type="search"
            name="search"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <ShopTitle />
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorPage />}
      {products.length === 0 || category === "Sea Foods" ? (
        <ErrorPage />
      ) : (
        <div
          className={`grid ${
            view === "list"
              ? "grid-cols-1 items-center"
              : view === "grid2"
              ? "md:grid-cols-3 lg:grid-cols-4"
              : "md:grid-cols-3 lg:grid-cols-5"
          } gap-4`}
        >
          {/* Product Grid */}
          {products.map((product) => (
            <ProductCard key={product._id} {...product} view={view} />
          ))}
        </div>
      )}
    </div>
  );
}
