"use client";

import DemographicCard from "../components/Dashboard/DemographicCard";
import MonthlySalesCard from "../components/Dashboard/MonthlySalesCard";
import RecentOrdersCard from "../components/Dashboard/RecentOrdersTable";
import StatCard from "../components/Dashboard/StatCard";
import StatisticsCard from "../components/Dashboard/StatisticsCard";
import TargetGaugeCard from "../components/Dashboard/TargetGaugeCard";

export default function DashboardPage() {
  return (
    <>
      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <div className="grid grid-cols-1 lg:col-span-4 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              title="Customers"
              value="3,782"
              delta="+10.1%"
              deltaTone="positive"
              icon="users"
            />
            <StatCard
              title="Orders"
              value="5,359"
              delta="-8.05%"
              deltaTone="negative"
              icon="package"
            />
          </div>
          <MonthlySalesCard />
        </div>
        <div className="grid grid-cols-1 lg:col-span-3 gap-4">
          <TargetGaugeCard
            progress={75.55}
            target="$20K"
            revenue="$16K"
            today="$1.5K"
          />
        </div>
      </div>

      {/* Wide line chart */}
      <StatisticsCard />

      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DemographicCard />
        <RecentOrdersCard className="lg:col-span-2" />
      </div>
    </>
  );
}
