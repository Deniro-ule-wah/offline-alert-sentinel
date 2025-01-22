import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: number;
  description: string;
  trend?: "up" | "down";
  trendValue?: string;
}

const StatsCard = ({ title, value, description, trend, trendValue }: StatsCardProps) => (
  <Card className="p-4">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <div className="mt-2 flex items-baseline gap-2">
      <p className="text-2xl font-semibold">{value}</p>
      {trend && trendValue && (
        <span className={cn("text-sm", {
          "text-success": trend === "up",
          "text-danger": trend === "down",
        })}>
          {trend === "up" ? "↑" : "↓"} {trendValue}
        </span>
      )}
    </div>
    <p className="mt-1 text-sm text-gray-500">{description}</p>
  </Card>
);

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="Total Governors"
        value={48}
        description="Active governors in system"
        trend="up"
        trendValue="2 this week"
      />
      <StatsCard
        title="Offline Governors"
        value={3}
        description="Currently offline"
        trend="down"
        trendValue="5 since yesterday"
      />
      <StatsCard
        title="Average Response Time"
        value={15}
        description="Minutes to resolve"
      />
      <StatsCard
        title="Critical Alerts"
        value={2}
        description="Requiring immediate attention"
      />
    </div>
  );
};