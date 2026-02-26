"use client";

import React, { useRef } from "react";
import { X, Circle } from "lucide-react";
import { FileIcon } from "./FileIcon";
import { getLineNumbers } from "./utils";
import { renderHighlightedContent } from "./syntaxHighlighting";

interface VSCodeEditorProps {
  activeTab: string;
  openTabs: string[];
  draggedTab: string | null;
  activeContent: string;
  editedFiles: Set<string>;
  setActiveTab: (tab: string) => void;
  setOpenTabs: (tabs: string[]) => void;
  setDraggedTab: (tab: string | null) => void;
  handleContentChange: (content: string) => void;
}

export function VSCodeEditor({
  activeTab,
  openTabs,
  draggedTab,
  activeContent,
  editedFiles,
  setActiveTab,
  setOpenTabs,
  setDraggedTab,
  handleContentChange,
}: VSCodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null) as React.RefObject<HTMLTextAreaElement>;

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

  const handleDragStart = (e: React.DragEvent, tabName: string) => {
    setDraggedTab(tabName);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetTab: string) => {
    e.preventDefault();
    if (draggedTab === targetTab || !draggedTab) return;

    const draggedIndex = openTabs.indexOf(draggedTab);
    const targetIndex = openTabs.indexOf(targetTab);

    const newTabs = [...openTabs];
    newTabs.splice(draggedIndex, 1);
    newTabs.splice(targetIndex, 0, draggedTab);

    setOpenTabs(newTabs);
    setDraggedTab(null);
  };

  const closeTab = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((tab) => tab !== fileName);
    setOpenTabs(newTabs);
    if (activeTab === fileName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };

  const activeFile = files[activeTab as keyof typeof files];

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        overflow: "hidden",
      }}
    >
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#2d2d2d",
          borderBottom: "1px solid #1e1e1e",
          overflowX: "auto",
        }}
      >
        {openTabs.map((tab) => (
          <div
            key={tab}
            draggable
            onDragStart={(e) => handleDragStart(e, tab)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, tab)}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              cursor: "move",
              color: activeTab === tab ? "white" : "#969696",
              backgroundColor: activeTab === tab ? "#1e1e1e" : "#2d2d2d",
              borderTop:
                activeTab === tab
                  ? "2px solid #007acc"
                  : "2px solid transparent",
              position: "relative",
              opacity: draggedTab === tab ? 0.5 : 1,
              whiteSpace: "nowrap",
            }}
          >
            <FileIcon
              type={files[tab as keyof typeof files]?.icon || "file"}
              size={14}
            />
            <span>{tab}</span>
            {editedFiles.has(tab) && (
              <Circle size={8} style={{ fill: "white", color: "white" }} />
            )}
            {openTabs.length > 1 && (
              <X
                size={14}
                onClick={(e) => closeTab(tab, e)}
                style={{ cursor: "pointer", marginLeft: "4px" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Breadcrumb */}
      <div
        style={{
          padding: "4px 16px",
          fontSize: "11px",
          color: "#969696",
          backgroundColor: "#1e1e1e",
          borderBottom: "1px solid #2d2d2d",
        }}
      >
        sumit-portfolio {activeFile?.folder ? `› ${activeFile.folder}` : ""} ›{" "}
        {activeTab}
      </div>

      {/* Code Editor */}
      <div
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "#1e1e1e",
          padding: "16px 0",
          minHeight: 0,
          overflow: "auto",
        }}
      >
        {activeContent && (
          <>
            {/* Line Numbers */}
            <div
              style={{
                fontSize: "14px",
                fontFamily: 'Consolas, "Courier New", monospace',
                lineHeight: "21px",
                paddingLeft: "16px",
              }}
            >
              {getLineNumbers(activeContent)}
            </div>

            {/* Highlighted Code Content */}
            {renderHighlightedContent(
              activeContent,
              activeTab,
              textareaRef,
              handleContentChange
            )}
          </>
        )}
      </div>
    </div>
  );
}
