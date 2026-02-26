"use client";

import React, { useRef } from "react";

interface VSCodeStatusBarProps {
  activeTab: string;
  activeContent: string;
  editedFiles: Set<string>;
  time: Date;
  formatTime: (date: Date) => string;
}

export function VSCodeStatusBar({
  activeTab,
  activeContent,
  editedFiles,
  time,
  formatTime,
}: VSCodeStatusBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const files = {
    "README.md": { language: "Markdown", icon: "md", folder: null },
    "rarebetsports.tsx": {
      language: "TypeScript React",
      icon: "tsx",
      folder: "experience",
    },
    "jio-platforms.tsx": {
      language: "TypeScript React",
      icon: "tsx",
      folder: "experience",
    },
    "parcel-web3.tsx": {
      language: "TypeScript React",
      icon: "tsx",
      folder: "experience",
    },
    "myclassroom.tsx": {
      language: "TypeScript React",
      icon: "tsx",
      folder: "experience",
    },
    "resume.md": { language: "Markdown", icon: "md", folder: "career" },
    "skills.json": { language: "JSON", icon: "json", folder: null },
    "contact.tsx": { language: "TypeScript React", icon: "tsx", folder: null },
  };

  const activeFile = files[activeTab as keyof typeof files];

  return (
    <div
      style={{
        height: "22px",
        backgroundColor: "#007acc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
        fontSize: "12px",
        color: "white",
      }}
    >
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <span>
          Ln{" "}
          {activeContent
            ? activeContent
                .substring(0, textareaRef.current?.selectionStart || 0)
                .split("\n").length
            : 1}
          , Col {textareaRef.current?.selectionStart || 1}
        </span>
        <span>{activeFile?.language}</span>
        <span>UTF-8</span>
        {editedFiles.has(activeTab) && <span>● Modified</span>}
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <span>Senior Frontend Engineer</span>
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}
