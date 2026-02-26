"use client";

import React from "react";
import { FileText, FolderOpen, Briefcase, GraduationCap } from "lucide-react";

export function VSCodeActivityBar() {
  return (
    <div
      style={{
        width: "48px",
        backgroundColor: "#333333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "8px 0",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "8px 0",
          borderLeft: "2px solid #007acc",
        }}
      >
        <FileText
          size={24}
          style={{
            color: "#ffffff",
            filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))",
          }}
        />
      </div>
      <FolderOpen
        size={24}
        style={{
          color: "#858585",
          transition: "color 0.2s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#d7ba7d";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#858585";
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
      <Briefcase
        size={24}
        style={{
          color: "#858585",
          transition: "color 0.2s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#569cd6";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#858585";
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
      <GraduationCap
        size={24}
        style={{
          color: "#858585",
          transition: "color 0.2s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#4ec9b0";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#858585";
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
    </div>
  );
}
