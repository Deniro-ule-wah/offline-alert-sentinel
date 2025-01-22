import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";

export interface Governor {
  id: string;
  name: string;
  status: "online" | "offline" | "warning";
  client: string;
  region: string;
  lastUpdate: string;
  offlineReason?: string;
}

interface GovernorCardProps {
  governor: Governor;
}

export const GovernorCard = ({ governor }: GovernorCardProps) => {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{governor.name}</h3>
          <p className="text-sm text-gray-500">{governor.client}</p>
        </div>
        <StatusBadge status={governor.status} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Region</span>
          <span>{governor.region}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Last Update</span>
          <span>{governor.lastUpdate}</span>
        </div>
        {governor.status === "offline" && governor.offlineReason && (
          <div className="mt-3 text-sm text-danger">
            <p>Reason: {governor.offlineReason}</p>
          </div>
        )}
      </div>
    </Card>
  );
};