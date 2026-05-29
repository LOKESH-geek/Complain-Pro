import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

import {
  Search,
  Trash2,
} from "lucide-react";

import Badge from "./Badge";

import {
  assignTicket,
  deleteComplaint,
  updateComplaintStatus,
  updateFilter,
  updateSearch,
} from "../redux/complaintSlice";

import { selectFilteredComplaints } from "../redux/selectors";

import toast from "react-hot-toast";

const TEAMS = [
  "Support Queue",
  "Technical Team",
  "Billing Team",
  "Service Team",
  "Admin Team",
];

export default function ComplaintTable() {
  const dispatch = useDispatch();

  const complaints = useSelector(
    selectFilteredComplaints
  );

  const filter = useSelector(
    (s) => s.complaints.filter
  );

  const search = useSelector(
    (s) => s.complaints.search
  );

  return (
    <div className="px-8 pb-20">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search complaints..."
            value={search}
            onChange={(e) =>
              dispatch(
                updateSearch(
                  e.target.value
                )
              )
            }
            className="w-full pl-12 p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
          />
        </div>

        <select
          value={filter}
          onChange={(e) =>
            dispatch(
              updateFilter(
                e.target.value
              )
            )
          }
          className="p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
        >
          <option>All</option>

          <option>Pending</option>

          <option>Resolved</option>
        </select>
      </div>

      <div className="grid gap-6">
        {complaints.map((c) => (
          <motion.div
            key={c.id}
            whileHover={{ scale: 1.01 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <h2 className="text-3xl font-black">
                  {c.name}
                </h2>

                <p className="text-gray-300 mt-2">
                  {c.description}
                </p>

                <div className="flex gap-3 mt-5 flex-wrap text-sm">
                  <Badge type="ticket">
                    🎫 {c.ticketId}
                  </Badge>

                  <Badge type="category">
                    {c.category}
                  </Badge>

                  <Badge type="priority">
                    {c.priority}
                  </Badge>

                  <Badge type="assigned">
                    👨‍💻 {c.assignedTo}
                  </Badge>

                  <Badge
                    type={
                      c.status ===
                      "Resolved"
                        ? "resolved"
                        : "pending"
                    }
                  >
                    {c.status}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col gap-3 min-w-[220px]">
                <select
                  value={c.assignedTo}
                  onChange={(e) =>
                    dispatch(
                      assignTicket({
                        id: c.id,

                        assignedTo:
                          e.target.value,
                      })
                    )
                  }
                  className="p-3 rounded-xl bg-white/10 border border-white/10 outline-none"
                >
                  {TEAMS.map((t) => (
                    <option key={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() =>
                    dispatch(
                      updateComplaintStatus(
                        {
                          id: c.id,

                          status:
                            c.status ===
                            "Resolved"
                              ? "Pending"
                              : "Resolved",
                        }
                      )
                    )
                  }
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
                >
                  {c.status ===
                  "Resolved"
                    ? "Reopen Ticket"
                    : "Resolve Ticket"}
                </button>

                <button
                  onClick={() => {
                    dispatch(
                      deleteComplaint(
                        c.id
                      )
                    );

                    toast.success(
                      "Complaint Deleted"
                    );
                  }}
                  className="px-6 py-3 rounded-full bg-red-500/20 border border-red-400/20 flex items-center justify-center gap-2"
                >
                  <Trash2 size={18} />

                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}