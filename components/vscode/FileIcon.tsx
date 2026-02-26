"use client";

import React from "react";
import { FileText, Code2, FileCode } from "lucide-react";

interface FileIconProps {
  type: string;
  size?: number;
}

export function FileIcon({ type, size = 16 }: FileIconProps) {
  switch (type) {
    case "md":
      return <FileText size={size} style={{ color: "#519aba" }} />;
    case "tsx":
      return <Code2 size={size} style={{ color: "#3178c6" }} />;
    case "json":
      return <FileCode size={size} style={{ color: "#dcb67a" }} />;
    default:
      return <FileText size={size} style={{ color: "#cccccc" }} />;
  }
}
