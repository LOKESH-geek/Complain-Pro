import { useMemo } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  CircleAlert,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function DashboardCards() {
  const complaints = useSelector(
    (s) => s.complaints.complaints
  );

  const stats = useMemo(
    () => [
      {
        title: "Total",
        value: complaints.length,
        icon: <CircleAlert />,
      },

      {
        title: "Pending",
        value: complaints.filter(
          (c) => c.status === "Pending"
        ).length,
        icon: <Clock3 />,
      },

      {
        title: "Resolved",
        value: complaints.filter(
          (c) => c.status === "Resolved"
        ).length,
        icon: <CheckCircle2 />,
      },
    ],
    [complaints]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mt-10">

      {stats.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 border border-white/10 rounded-3xl p-8"
        >
          <div className="flex justify-between items-center">

            <div>
              <p>{item.title}</p>

              <h2 className="text-5xl font-black mt-4">
                {item.value}
              </h2>
            </div>

            <div className="text-cyan-400">
              {item.icon}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}