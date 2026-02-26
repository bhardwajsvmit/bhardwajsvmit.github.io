"use client";

import React, { Suspense } from "react";
import { VSCodeTitleBar } from "./VSCodeTitleBar";
import { VSCodeActivityBar } from "./VSCodeActivityBar";
import { VSCodeSidebar } from "./VSCodeSidebar";
import { VSCodeEditor } from "./VSCodeEditor";
import { VSCodeStatusBar } from "./VSCodeStatusBar";

interface VSCodeLayoutProps {
  activeTab: string;
  openTabs: string[];
  sidebarOpen: boolean;
  experienceOpen: boolean; // folder formerly 'projects'
  careerOpen: boolean; // career folder visibility
  time: Date;
  draggedTab: string | null;
  fileContents: Record<string, string>;
  editedFiles: Set<string>;
  setActiveTab: (tab: string) => void;
  setOpenTabs: (tabs: string[]) => void;
  setSidebarOpen: (open: boolean) => void;
  setExperienceOpen: (open: boolean) => void;
  setCareerOpen: (open: boolean) => void;
  setDraggedTab: (tab: string | null) => void;
  handleContentChange: (content: string, fileName: string) => void;
  formatTime: (date: Date) => string;
}

export function VSCodeLayout({
  activeTab,
  openTabs,
  sidebarOpen,
  experienceOpen,
  careerOpen,
  time,
  draggedTab,
  fileContents,
  editedFiles,
  setActiveTab,
  setOpenTabs,
  setSidebarOpen,
  setExperienceOpen,
  setCareerOpen,
  setDraggedTab,
  handleContentChange,
  formatTime,
}: VSCodeLayoutProps) {
  const activeContent = fileContents[activeTab as keyof typeof fileContents];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <VSCodeTitleBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <VSCodeActivityBar />

        {sidebarOpen && (
          <VSCodeSidebar
            activeTab={activeTab}
            experienceOpen={experienceOpen}
            careerOpen={careerOpen}
            openTab={(fileName) => {
              if (!openTabs.includes(fileName)) {
                setOpenTabs([...openTabs, fileName]);
              }
              setActiveTab(fileName);
            }}
            setExperienceOpen={setExperienceOpen}
            setCareerOpen={setCareerOpen}
          />
        )}

        <VSCodeEditor
          activeTab={activeTab}
          openTabs={openTabs}
          draggedTab={draggedTab}
          activeContent={activeContent}
          editedFiles={editedFiles}
          setActiveTab={setActiveTab}
          setOpenTabs={setOpenTabs}
          setDraggedTab={setDraggedTab}
          handleContentChange={(content) =>
            handleContentChange(content, activeTab)
          }
        />
      </div>
      <VSCodeStatusBar
        activeTab={activeTab}
        activeContent={activeContent}
        editedFiles={editedFiles}
        time={time}
        formatTime={formatTime}
      />
    </div>
  );
}
