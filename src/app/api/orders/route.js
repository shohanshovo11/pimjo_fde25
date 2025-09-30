import { NextResponse } from 'next/server';
import orders from '@/data/orders';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status') || '';

    let filteredOrders = orders;

    // Apply status filter
    if (status) {
      filteredOrders = filteredOrders.filter(order =>
        order.status.toLowerCase() === status.toLowerCase()
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

    const totalOrders = filteredOrders.length;
    const totalPages = Math.ceil(totalOrders / limit);

    return NextResponse.json({
      success: true,
      data: paginatedOrders,
      pagination: {
        currentPage: page,
        totalPages,
        totalOrders,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}