import { createSelector } from "@reduxjs/toolkit";

const selectComplaintsState = (state) =>
  state.complaints;

export const selectFilteredComplaints =
  createSelector(
    [selectComplaintsState],
    ({ complaints, filter, search }) =>
      complaints.filter((c) => {
        const haystack =
          `${c.name} ${c.category} ${c.description} ${c.ticketId} ${c.assignedTo}`.toLowerCase();

        const matchSearch = haystack.includes(
          search.toLowerCase()
        );

        const matchFilter =
          filter === "All" ||
          c.status === filter;

        return matchSearch && matchFilter;
      })
  );