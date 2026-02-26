"use client";

import React from "react";
import { ChevronRight, ChevronDown, FolderOpen, Folder } from "lucide-react";
import { FileIcon } from "./FileIcon";

interface VSCodeSidebarProps {
  activeTab: string;
  experienceOpen: boolean;
  careerOpen: boolean;
  openTab: (fileName: string) => void;
  setExperienceOpen: (open: boolean) => void;
  setCareerOpen: (open: boolean) => void;
}

export function VSCodeSidebar({
  activeTab,
  experienceOpen,
  careerOpen,
  openTab,
  setExperienceOpen,
  setCareerOpen,
}: VSCodeSidebarProps) {
  const files = {
    "README.md": { icon: "md", folder: null },
    "rarebetsports.tsx": { icon: "tsx", folder: "experience" },
    "jio-platforms.tsx": { icon: "tsx", folder: "experience" },
    "parcel-web3.tsx": { icon: "tsx", folder: "experience" },
    "myclassroom.tsx": { icon: "tsx", folder: "experience" },
    "resume.md": { icon: "md", folder: "career" },
    "skills.json": { icon: "json", folder: null },
    "contact.tsx": { icon: "tsx", folder: null },
  };

  const handleFileClick = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    openTab(fileName);
  };

  const handleFolderClick = (
    setter: (open: boolean) => void,
    isOpen: boolean,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setter(!isOpen);
  };

  const getFileItemStyle = (fileName: string) => ({
    padding: "4px 8px 4px 32px",
    fontSize: "13px",
    color: activeTab === fileName ? "white" : "#cccccc",
    backgroundColor: activeTab === fileName ? "#37373d" : "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  });

  const getSubFileItemStyle = (fileName: string) => ({
    padding: "4px 8px 4px 56px",
    fontSize: "13px",
    color: activeTab === fileName ? "white" : "#cccccc",
    backgroundColor: activeTab === fileName ? "#37373d" : "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  });

  return (
    <div
      style={{
        width: "280px",
        backgroundColor: "#252526",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #2d2d2d",
      }}
    >
      <div
          style={{
          padding: "8px 20px",
          fontSize: "11px",
          color: "#cccccc",
          textTransform: "uppercase",
          fontWeight: 600,
          letterSpacing: "0.5px",
        }}
      >
        Portfolio Explorer
      </div>

      <div style={{ flex: 1, overflow: "auto" }}>
        {/* PORTFOLIO header */}
        <div
          style={{
            padding: "4px 12px",
            fontSize: "11px",
            color: "#cccccc",
            textTransform: "uppercase",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <ChevronDown size={16} />
          <span>SUMIT-PORTFOLIO</span>
        </div>

        {/* README.md */}
        <div
          onClick={(e) => handleFileClick("README.md", e)}
          style={getFileItemStyle("README.md")}
          onMouseEnter={(e) => {
            if (activeTab !== "README.md")
              e.currentTarget.style.backgroundColor = "#2a2d2e";
          }}
          onMouseLeave={(e) => {
            if (activeTab !== "README.md")
              e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <FileIcon type="md" size={16} />
          <span>README.md</span>
        </div>

        {/* experience folder */}
        <div
          onClick={(e) => handleFolderClick(setExperienceOpen, experienceOpen, e)}
          style={{
            padding: "4px 8px 4px 32px",
            fontSize: "13px",
            color: "#cccccc",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#2a2d2e")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          {experienceOpen ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
          {experienceOpen ? (
            <FolderOpen size={16} style={{ color: "#dcb67a" }} />
          ) : (
            <Folder size={16} style={{ color: "#dcb67a" }} />
          )}
          <span>experience</span>
        </div>

        {experienceOpen && (
          <>
            {[
              "rarebetsports.tsx",
              "jio-platforms.tsx",
              "parcel-web3.tsx",
              "myclassroom.tsx",
            ].map((fileName) => (
              <div
                key={fileName}
                onClick={(e) => handleFileClick(fileName, e)}
                style={getSubFileItemStyle(fileName)}
                onMouseEnter={(e) => {
                  if (activeTab !== fileName)
                    e.currentTarget.style.backgroundColor = "#2a2d2e";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== fileName)
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FileIcon type="tsx" size={16} />
                <span>{fileName}</span>
              </div>
            ))}
          </>
        )}

        {/* career folder */}
        <div
          onClick={(e) =>
            handleFolderClick(setCareerOpen, careerOpen, e)
          }
          style={{
            padding: "4px 8px 4px 32px",
            fontSize: "13px",
            color: "#cccccc",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#2a2d2e")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          {careerOpen ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
          {careerOpen ? (
            <FolderOpen size={16} style={{ color: "#dcb67a" }} />
          ) : (
            <Folder size={16} style={{ color: "#dcb67a" }} />
          )}
          <span>career</span>
        </div>

        {careerOpen && (
          <div
            onClick={(e) => handleFileClick("resume.md", e)}
            style={getSubFileItemStyle("resume.md")}
            onMouseEnter={(e) => {
              if (activeTab !== "resume.md")
                e.currentTarget.style.backgroundColor = "#2a2d2e";
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "resume.md")
                e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <FileIcon type="md" size={16} />
            <span>resume.md</span>
          </div>
        )}

        {/* skills.json */}
        <div
          onClick={(e) => handleFileClick("skills.json", e)}
          style={getFileItemStyle("skills.json")}
          onMouseEnter={(e) => {
            if (activeTab !== "skills.json")
              e.currentTarget.style.backgroundColor = "#2a2d2e";
          }}
          onMouseLeave={(e) => {
            if (activeTab !== "skills.json")
              e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <FileIcon type="json" size={16} />
          <span>skills.json</span>
        </div>

        {/* contact.tsx */}
        <div
          onClick={(e) => handleFileClick("contact.tsx", e)}
          style={getFileItemStyle("contact.tsx")}
          onMouseEnter={(e) => {
            if (activeTab !== "contact.tsx")
              e.currentTarget.style.backgroundColor = "#2a2d2e";
          }}
          onMouseLeave={(e) => {
            if (activeTab !== "contact.tsx")
              e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <FileIcon type="tsx" size={16} />
          <span>contact.tsx</span>
        </div>
      </div>
    </div>
  );
}
