export default function Badge({ type, children }) {
  const styles = {
    ticket: "bg-white/10 border-white/10",
    category: "bg-cyan-500/20 border-cyan-400/20",
    priority: "bg-purple-500/20 border-purple-400/20",
    assigned: "bg-blue-500/20 border-blue-400/20",
    pending: "bg-yellow-500/20 border-yellow-400/20",
    resolved: "bg-green-500/20 border-green-400/20",
  };

  return (
    <span
      className={`px-4 py-2 rounded-full border ${styles[type]}`}
    >
      {children}
    </span>
  );
}