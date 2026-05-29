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

export default seedComplaints;