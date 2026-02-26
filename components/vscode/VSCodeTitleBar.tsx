"use client";

import React from "react";
import { Menu, FileCode } from "lucide-react";

interface VSCodeTitleBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function VSCodeTitleBar({
  sidebarOpen,
  setSidebarOpen,
}: VSCodeTitleBarProps) {
  return (
    <div
      style={{
        height: "35px",
        backgroundColor: "#3c3c3c",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        gap: "12px",
        borderBottom: "1px solid #2d2d2d",
      }}
    >
        <Menu
        size={16}
        style={{ color: "#cccccc", cursor: "pointer" }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <FileCode size={16} style={{ color: "#cccccc" }} />
      <span style={{ fontSize: "13px", color: "#cccccc" }}>
        Sumit Bhardwaj - Senior Frontend Engineer - Visual Studio Code
      </span>
    </div>
  );
}
