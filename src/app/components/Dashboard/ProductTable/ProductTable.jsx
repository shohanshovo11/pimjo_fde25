'use client';

import { useState } from 'react';

const products = [
  {
    image: '/images/products/image_1.png',
    name: 'Macbook pro 13″',
    variants: '2 Variants',
    category: 'Laptop',
    price: '$2399.00',
    status: 'Delivered',
    statusColor: 'text-green-600 bg-green-50',
  },
  {
    image: '/images/products/image_2.png',
    name: 'Apple Watch Ultra',
    variants: '1 Variants',
    category: 'Watch',
    price: '$879.00',
    status: 'Pending',
    statusColor: 'text-yellow-500 bg-yellow-50',
  },
  {
    image: '/images/products/image_3.png',
    name: 'iPhone 15 Pro Max',
    variants: '2 Variants',
    category: 'Smart Phone',
    price: '$1869.00',
    status: 'Delivered',
    statusColor: 'text-green-600 bg-green-50',
  },
  {
    image: '/images/products/image_4.png',
    name: 'iPad Pro 3rd Gen',
    variants: '2 Variants',
    category: 'Electronics',
    price: '$1699.00',
    status: 'Canceled',
    statusColor: 'text-red-500 bg-red-50',
  },
  {
    image: '/images/products/image_5.png',
    name: 'Airpods Pro 2nd Gen',
    variants: '1 Variants',
    category: 'Accessories',
    price: '$240.00',
    status: 'Delivered',
    statusColor: 'text-green-600 bg-green-50',
  },
  {
    image: '/images/products/image_5.png',
    name: 'Airpods Pro 2nd Gen',
    variants: '1 Variants',
    category: 'Accessories',
    price: '$240.00',
    status: 'Delivered',
    statusColor: 'text-green-600 bg-green-50',
  },
  {
    image: '/images/products/image_5.png',
    name: 'Airpods Pro 2nd Gen',
    variants: '1 Variants',
    category: 'Accessories',
    price: '$240.00',
    status: 'Delivered',
    statusColor: 'text-green-600 bg-green-50',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductTable() {
  const [page, setPage] = useState(1);

  return (
    <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div className="text-lg font-semibold text-gray-900">All products</div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="h-10 pl-10 pr-3 text-sm rounded-lg border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </div>
          <button className="h-10 px-4 flex items-center text-sm border border-gray-100 bg-gray-50 rounded-lg gap-2 text-gray-500 font-normal">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <th className="text-left text-xs font-medium text-gray-400 px-2 py-1">Products</th>
              <th className="text-left text-xs font-medium text-gray-400 px-2 py-1">Category</th>
              <th className="text-left text-xs font-medium text-gray-400 px-2 py-1">Price</th>
              <th className="text-left text-xs font-medium text-gray-400 px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr
                key={idx}
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
                      <div className="text-sm font-medium text-gray-900 leading-tight">{p.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{p.variants}</div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-sm text-gray-500">{p.category}</td>
                <td className="px-2 py-2 text-sm text-gray-700 font-medium">{p.price}</td>
                <td className="px-2 py-2">
                  <span
                    className={classNames(
                      "px-2 py-1 text-xs font-semibold rounded-lg",
                      p.statusColor
                    )}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <button
          className="flex items-center gap-1 text-gray-500 hover:text-blue-600 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-sm font-medium"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <span className="text-xl">←</span> Previous
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, '...', 8, 9, 10].map((num, idx) => (
            typeof num === 'number' ? (
              <button
                key={idx}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm ${
                  page === num
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 bg-gray-50 hover:bg-gray-100'
                } font-medium`}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            ) : (
              <span key={idx} className="w-8 h-8 flex items-center justify-center text-sm text-gray-300">{num}</span>
            )
          ))}
        </div>
        <button
          className="flex items-center gap-1 text-gray-500 hover:text-blue-600 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-sm font-medium"
          onClick={() => setPage(page + 1)}
          disabled={page === 10}
        >
          Next <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
