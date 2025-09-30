import { NextResponse } from 'next/server';
import products from '@/data/products';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    let filteredProducts = products;

    // Apply search filter
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category) {
      filteredProducts = filteredProducts.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / limit);

    return NextResponse.json({
      success: true,
      data: paginatedProducts,
      pagination: {
        currentPage: page,
        totalPages,
        totalProducts,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}