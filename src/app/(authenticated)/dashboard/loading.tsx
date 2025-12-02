import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-9 w-48 mb-6" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
}
