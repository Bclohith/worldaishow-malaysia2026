export const metadata = {
  title: "Session Tracker | World AI Show Malaysia",
  description: "Session Attendance Tracker for World AI Show Malaysia.",
};

export default function SessionTrackerPage() {
  return (
    <main className="w-full h-screen min-h-[100vh] bg-[#06111f] overflow-hidden">
      <iframe
        src="/malaysia/session-tracker-app/index.html"
        className="w-full h-full border-none"
        title="Session Tracker"
        allow="camera; microphone"
      />
    </main>
  );
}
