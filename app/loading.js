export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
