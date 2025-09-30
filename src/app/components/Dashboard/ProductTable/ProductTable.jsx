"use client";

import { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "delivered":
      return "text-green-600 bg-green-50";
    case "pending":
      return "text-yellow-500 bg-yellow-50";
    case "canceled":
      return "text-red-500 bg-red-50";
    case "processing":
      return "text-blue-500 bg-blue-50";
    default:
      return "text-gray-500 bg-gray-50";
  }
}

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [search, setSearch] = useState("");

  const fetchProducts = async (currentPage = 1, searchTerm = "") => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/products?page=${currentPage}&limit=7&search=${searchTerm}`
      );
      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page, search);
  }, [page, search]);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setPage(1); // Reset to first page when searching
  };

  return (
    <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div className="text-lg font-semibold text-gray-900">All products</div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-10 pl-10 pr-3 text-sm rounded-lg border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <svg
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <button className="h-10 px-4 flex items-center text-sm border border-gray-100 bg-gray-50 rounded-lg gap-2 text-gray-500 font-normal">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="7" y="10" width="13" height="10" rx="2" />
              <path d="M16 3v5" />
              <path d="M8 3v5" />
            </svg>
            05 Feb - 06 March
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="text-left text-xs font-medium text-gray-400 px-2 py-1">
                Products
              </th>
              <th className="text-left text-xs font-medium text-gray-400 px-2 py-1">
                Category
              </th>
              <th className="text-left text-xs font-medium text-gray-400 px-2 py-1">
                Price
              </th>
              <th className="text-left text-xs font-medium text-gray-400 px-2 py-1">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="px-2 py-8 text-center text-gray-500">
                  Loading products...
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-2 py-8 text-center text-gray-500">
                  No products found
                </td>
              </tr>
            ) : (
              products.map((p, idx) => (
                <tr
                  key={p.id}
                  className={classNames(
                    "bg-white hover:bg-gray-50 transition rounded-lg",
                    idx !== products.length - 1 ? "border-b border-gray-50" : ""
                  )}
                >
                  <td className="px-2 py-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-10 h-10 rounded-md object-cover border border-gray-100"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900 leading-tight">
                          {p.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {p.variants}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-sm text-gray-500">
                    {p.category}
                  </td>
                  <td className="px-2 py-2 text-sm text-gray-700 font-medium">
                    ${p.price.toFixed(2)}
                  </td>
                  <td className="px-2 py-2">
                    <span
                      className={classNames(
                        "px-2 py-1 text-xs font-semibold rounded-lg",
                        getStatusColor(p.status)
                      )}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <button
          className={`flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-sm font-medium ${
            !pagination.hasPrevPage
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-500 hover:text-blue-600"
          }`}
          disabled={!pagination.hasPrevPage}
          onClick={() => setPage(page - 1)}
        >
          <span className="text-xl">←</span> Previous
        </button>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
        </div>
        <button
          className={`flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-sm font-medium ${
            !pagination.hasNextPage
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setPage(page + 1)}
          disabled={!pagination.hasNextPage}
        >
          Next <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
