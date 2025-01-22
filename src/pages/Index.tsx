import { useState } from "react";
import { DashboardStats } from "@/components/DashboardStats";
import { GovernorCard, type Governor } from "@/components/GovernorCard";

// Mock data - replace with real data later
const mockGovernors: Governor[] = [
  {
    id: "1",
    name: "Governor A1",
    status: "offline",
    client: "Client Alpha",
    region: "North America",
    lastUpdate: "2 minutes ago",
    offlineReason: "Network connectivity issue",
  },
  {
    id: "2",
    name: "Governor B2",
    status: "online",
    client: "Client Beta",
    region: "Europe",
    lastUpdate: "1 minute ago",
  },
  {
    id: "3",
    name: "Governor C3",
    status: "warning",
    client: "Client Gamma",
    region: "Asia Pacific",
    lastUpdate: "5 minutes ago",
  },
  // Add more mock governors as needed
];

const Index = () => {
  const [governors] = useState<Governor[]>(mockGovernors);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Governor Status Dashboard</h1>
          <p className="text-gray-500">Monitor and manage governor status in real-time</p>
        </div>

        <div className="mb-8">
          <DashboardStats />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Active Governors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {governors.map((governor) => (
              <GovernorCard key={governor.id} governor={governor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;