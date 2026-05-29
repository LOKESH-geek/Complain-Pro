import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { Plus } from "lucide-react";

import { addComplaint } from "../redux/complaintSlice";

const EMPTY_FORM = {
  name: "",
  email: "",
  category: "Technical",
  priority: "Medium",
  description: "",
};

export default function ComplaintForm() {
  const dispatch = useDispatch();

  const [form, setForm] =
    useState(EMPTY_FORM);

  const set =
    (key) => (e) =>
      setForm((f) => ({
        ...f,
        [key]: e.target.value,
      }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.description
    ) {
      toast.error(
        "Fill all required fields"
      );

      return;
    }

    dispatch(
      addComplaint({
        id: crypto.randomUUID(),

        ticketId: `TICK-${Date.now()
          .toString()
          .slice(-5)}`,

        assignedTo: "Support Queue",

        status: "Pending",

        createdAt:
          new Date().toLocaleDateString(),

        ...form,
      })
    );

    toast.success(
      "Complaint Added Successfully"
    );

    setForm(EMPTY_FORM);
  };

  return (
    <div className="px-8 py-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10"
      >
        <div className="flex items-center gap-3 mb-10">
          <Plus className="text-cyan-400" />

          <h2 className="text-4xl font-black">
            Register Complaint
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={set("name")}
            className="p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={set("email")}
            className="p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
          />

          <select
            value={form.category}
            onChange={set("category")}
            className="p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
          >
            <option>Technical</option>

            <option>Billing</option>

            <option>Service</option>
          </select>

          <select
            value={form.priority}
            onChange={set("priority")}
            className="p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
          >
            <option>Low</option>

            <option>Medium</option>

            <option>High</option>
          </select>
        </div>

        <textarea
          placeholder="Describe your complaint"
          value={form.description}
          onChange={set("description")}
          className="w-full mt-6 p-5 rounded-2xl bg-black/20 border border-white/10 outline-none h-40"
        />

        <button
          type="submit"
          className="mt-8 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}