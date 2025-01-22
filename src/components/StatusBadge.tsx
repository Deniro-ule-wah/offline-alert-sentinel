import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "online" | "offline" | "warning";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1";
  const statusClasses = {
    online: "bg-success/20 text-success",
    offline: "bg-danger/20 text-danger animate-pulse",
    warning: "bg-warning/20 text-warning",
  };

  return (
    <span className={cn(baseClasses, statusClasses[status], className)}>
      <span className={cn("w-2 h-2 rounded-full", {
        "bg-success": status === "online",
        "bg-danger": status === "offline",
        "bg-warning": status === "warning",
      })} />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};