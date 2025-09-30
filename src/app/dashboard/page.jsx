"use client";

import { useState, useEffect } from "react";
import DemographicCard from "../components/Dashboard/DemographicCard";
import MonthlySalesCard from "../components/Dashboard/MonthlySalesCard";
import RecentOrdersCard from "../components/Dashboard/RecentOrdersTable";
import StatCard from "../components/Dashboard/StatCard";
import StatisticsCard from "../components/Dashboard/StatisticsCard";
import TargetGaugeCard from "../components/Dashboard/TargetGaugeCard";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");
        const data = await response.json();
        if (data.success) {
          setStats(data.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading dashboard...</div>
      </div>
    );
  }
  return (
    <>
      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <div className="grid grid-cols-1 lg:col-span-4 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              title="Customers"
              value={
                stats?.demographics
                  ? `${(
                      stats.demographics.newCustomers +
                      stats.demographics.returningCustomers
                    ).toLocaleString()}`
                  : "0"
              }
              delta={`+${stats?.demographics?.conversionRate || 0}%`}
              deltaTone="positive"
              icon="users"
            />
            <StatCard
              title="Orders"
              value={stats?.overview?.totalOrders?.toLocaleString() || "0"}
              delta="+12.3%"
              deltaTone="positive"
              icon="package"
            />
          </div>
          <MonthlySalesCard salesData={stats?.sales} />
        </div>
        <div className="grid grid-cols-1 lg:col-span-3 gap-4">
          <TargetGaugeCard
            progress={
              stats?.sales ? (stats.sales.current / 60000) * 100 : 75.55
            }
            target="$60K"
            revenue={
              stats?.sales
                ? `$${(stats.sales.current / 1000).toFixed(0)}K`
                : "$45K"
            }
            today="$1.5K"
          />
        </div>
      </div>

      {/* Wide line chart */}
      <StatisticsCard />

      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DemographicCard demographics={stats?.demographics} />
        <RecentOrdersCard
          className="lg:col-span-2"
          orders={stats?.orders?.recentOrders}
        />
      </div>
    </>
  );
}
