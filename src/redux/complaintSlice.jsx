import { createSlice, createSelector } from "@reduxjs/toolkit";

const seedComplaints = [
  {
    id: crypto.randomUUID(),
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    category: "Technical",
    priority: "High",
    ticketId: `TICK-${Date.now().toString().slice(-5)}`,
    assignedTo: "Technical Team",
    status: "Pending",
    description: "Application crashes during login.",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Priya Singh",
    email: "priya@gmail.com",
    category: "Billing",
    priority: "Medium",
    ticketId: `TICK-${(Date.now() + 1).toString().slice(-5)}`,
    assignedTo: "Billing Team",
    status: "Resolved",
    description: "Double charged for subscription.",
    createdAt: new Date().toLocaleDateString(),
  },
];

const complaintSlice = createSlice({
  name: "complaints",
  initialState: {
    complaints:
      JSON.parse(localStorage.getItem("cms_complaints")) || seedComplaints,
    filter: "All",
    search: "",
  },

  reducers: {
    addComplaint(state, action) {
      state.complaints.unshift(action.payload);
    },

    deleteComplaint(state, action) {
      state.complaints = state.complaints.filter(
        (item) => item.id !== action.payload
      );
    },

    assignTicket(state, action) {
      const found = state.complaints.find(
        (c) => c.id === action.payload.id
      );

      if (found) {
        found.assignedTo = action.payload.assignedTo;
      }
    },

    updateComplaintStatus(state, action) {
      const found = state.complaints.find(
        (c) => c.id === action.payload.id
      );

      if (found) {
        found.status = action.payload.status;
      }
    },

    updateFilter(state, action) {
      state.filter = action.payload;
    },

    updateSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const {
  addComplaint,
  deleteComplaint,
  assignTicket,
  updateComplaintStatus,
  updateFilter,
  updateSearch,
} = complaintSlice.actions;

export default complaintSlice.reducer;

const selectComplaintsState = (state) => state.complaints;

export const selectFilteredComplaints = createSelector(
  [selectComplaintsState],
  ({ complaints, filter, search }) =>
    complaints.filter((c) => {
      const text =
        `${c.name} ${c.category} ${c.description} ${c.ticketId}`.toLowerCase();

      const searchMatch = text.includes(search.toLowerCase());

      const filterMatch =
        filter === "All" || c.status === filter;

      return searchMatch && filterMatch;
    })
);