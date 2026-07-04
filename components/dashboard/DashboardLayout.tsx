"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Feed from "./Feed";

export default function DashboardLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar />
        <Feed />
      </div>
    </div>
  );
}
