import { NextResponse } from 'next/server';
import products from '@/data/products';
import orders from '@/data/orders';

export async function GET() {
  try {
    // Calculate various statistics
    const totalProducts = products.length;
    const totalOrders = orders.length;
    
    // Calculate total revenue
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    
    // Calculate order status counts
    const orderStatusCounts = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});

    // Calculate category distribution
    const categoryDistribution = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    // Calculate total stock
    const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

    // Calculate low stock products (less than 10)
    const lowStockProducts = products.filter(product => product.stock < 10).length;

    // Recent orders (last 5)
    const recentOrders = orders.slice(-5).reverse();

    // Monthly sales (mock data for current month)
    const monthlySales = {
      current: 45678,
      previous: 38234,
      growth: 19.5
    };

    const stats = {
      overview: {
        totalProducts,
        totalOrders,
        totalRevenue,
        totalStock,
        lowStockProducts
      },
      orders: {
        statusCounts: orderStatusCounts,
        recentOrders
      },
      products: {
        categoryDistribution,
        lowStockCount: lowStockProducts
      },
      sales: monthlySales,
      demographics: {
        newCustomers: 1240,
        returningCustomers: 3680,
        conversionRate: 3.2
      }
    };

    return NextResponse.json({
      success: true,
      data: stats
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}