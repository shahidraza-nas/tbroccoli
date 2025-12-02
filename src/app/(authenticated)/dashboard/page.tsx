export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Dashboard content will go here */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p className="text-muted-foreground">
            This is your dashboard overview.
          </p>
        </div>
      </div>
    </div>
  );
}
