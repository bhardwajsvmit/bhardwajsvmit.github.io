"use client";

import React, { RefObject } from "react";

const applyJsonSyntaxHighlighting = (content: string): string => {
  // Escape HTML entities in content first
  const escapeHtml = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  
  let result = escapeHtml(content);

  // 1. Highlight keys: &quot;anything&quot; that appears before a colon
  result = result.replace(
    /&quot;([^&]*(?:&[^;]*;[^&]*)*)&quot;(\s*):/g,
    '<span style="color: #9cdcfe">&quot;$1&quot;</span>$2<span style="color: #d4d4d4">:</span>'
  );

  // 2. Highlight string values: : followed by &quot;anything&quot;
  result = result.replace(
    /:\s*(&quot;[^&]*(?:&[^;]*;[^&]*)*&quot;)/g,
    ': <span style="color: #ce9178">$1</span>'
  );

  // 3. Highlight numbers: : followed by number
  result = result.replace(
    /:\s*(-?\d+\.?\d*)/g,
    ': <span style="color: #b5cea8">$1</span>'
  );

  // 4. Highlight booleans and null
  result = result.replace(
    /:\s*(true|false|null)/g,
    ': <span style="color: #569cd6">$1</span>'
  );

  // 5. Highlight structural characters
  result = result.replace(/[{}[\]]/g, '<span style="color: #d4d4d4">$&</span>');
  result = result.replace(/,/g, '<span style="color: #d4d4d4">,</span>');

  return result;
};

export const getSyntaxHighlighting = (content: string, fileName: string) => {
  try {

    let result = content;

    // If the file is JSON, try pretty-printing to avoid UI overflow
    if (fileName.endsWith(".json")) {
      try {
        const parsed = JSON.parse(result);
        result = JSON.stringify(parsed, null, 2);
      } catch (err) {
        // ignore parse errors
      }
    }

    // Escape HTML so TSX/JSX doesn't render as real DOM when using dangerouslySetInnerHTML
    const escapeHtml = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    
    // For JSON, apply syntax highlighting first, then escape
    if (fileName.endsWith(".json")) {
      result = applyJsonSyntaxHighlighting(result);
      // HTML is already in spans, so we just need to escape the content, not the spans
      return result;
    }
    
    result = escapeHtml(result);

    // Special handling for problematic TSX files
    const problematicFiles = [
      "rarebetsports.tsx",
      "jio-platforms.tsx",
      "parcel-web3.tsx",
      "myclassroom.tsx",
      "contact.tsx", 
    ];
    if (problematicFiles.includes(fileName)) {
      // More conservative highlighting for this specific file
      try {
        // Only highlight the most essential patterns
        result = result.replace(
          /\b(import|export|from|const|let|var|function|interface|class)\b/g,
          '<span style="color: #569cd6">$1</span>'
        );
        result = result.replace(
          /\b(true|false|null|undefined)\b/g,
          '<span style="color: #569cd6">$1</span>'
        );
        result = result.replace(
          /\/\/.*$/gm,
          '<span style="color: #6a9955">$&</span>'
        );
        result = result.replace(
          /\/\*[\s\S]*?\*\//g,
          '<span style="color: #6a9955">$&</span>'
        );
        return result;
      } catch (error) {
        console.warn(`Conservative handling failed for ${fileName}:`, error);
        return content;
      }
    }

    if (fileName.endsWith(".md")) {
      // Markdown syntax highlighting - step by step
      // Header lines may be indented by spaces, so trim whitespace before matching
      result = result.replace(
        /^(\s*)(#{1,6}\s.*$)/gm,
        (match, spaces, header) => `${spaces}<span style="color: #569cd6">${header}</span>`
      );
      result = result.replace(
        /\*\*(.*?)\*\*/g,
        '<span style="color: #dcdcaa">$1</span>'
      );
      result = result.replace(
        /\*(.*?)\*/g,
        '<span style="color: #d7ba7d">$1</span>'
      );
      result = result.replace(
        /\`([^\`]+)\`/g,
        '<span style="color: #d16969">$1</span>'
      );
      // Convert badge links first: [![alt](image)](link)
      result = result.replace(
        /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g,
        '<a href="$3" target="_blank" style="display: inline-block;"><img src="$2" alt="$1" style="height: 28px; margin: 4px 2px; vertical-align: middle;" /></a>'
      );
      // Convert regular markdown links to HTML anchor tags
      result = result.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" style="color: #569cd6; text-decoration: none;" target="_blank">$1</a>'
      );
      // Convert standalone markdown images
      result = result.replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        '<img src="$2" alt="$1" style="max-width: 100%; height: auto; margin: 4px 2px; vertical-align: middle;" />'
      );
      result = result.replace(
        /^(\s*[-*+]\s.*)$/gm,
        '<span style="color: #6a9955">$1</span>'
      );
    } else if (fileName.endsWith(".tsx") || fileName.endsWith(".ts")) {
      // TypeScript/TSX syntax highlighting - conservative approach for non-problematic files
      try {
        // Only highlight the most essential and safe patterns
        result = result.replace(
          /\b(import|export|from|default|const|let|var|function|interface|type|class)\b/g,
          '<span style="color: #569cd6">$1</span>'
        );

        // Literals
        result = result.replace(
          /\b(true|false|null|undefined)\b/g,
          '<span style="color: #569cd6">$1</span>'
        );

        // Comments
        result = result.replace(
          /\/\/.*$/gm,
          '<span style="color: #6a9955">$&</span>'
        );
        result = result.replace(
          /\/\*[\s\S]*?\*\//g,
          '<span style="color: #6a9955">$&</span>'
        );

        // Safe string highlighting
        result = result.replace(
          /"([^"\\]*(?:\\.[^"\\]*)*)"/g,
          '<span style="color: #ce9178">"$1"</span>'
        );
        result = result.replace(
          /'([^'\\]*(?:\\.[^'\\]*)*)'/g,
          "<span style=\"color: #ce9178\">'$1'</span>"
        );
      } catch (error) {
        console.warn(
          `Conservative TSX syntax highlighting failed for ${fileName}:`,
          error
        );
        // Return original content if highlighting fails
        return content;
      }
    }

    return result;
  } catch (error) {
    // If highlighting fails, return original content
    console.warn(`Syntax highlighting failed for ${fileName}:`, error);
    return content;
  }
};

export const renderHighlightedContent = (
  content: string,
  fileName: string,
  textareaRef: RefObject<HTMLTextAreaElement>,
  handleContentChange: (content: string) => void
) => {
  const highlighted = getSyntaxHighlighting(content, fileName);

  if (highlighted !== content) {
    // If highlighting was applied, render as HTML
    return (
      <div
        style={{
          flex: 1,
          fontSize: "14px",
          fontFamily: 'Consolas, "Courier New", monospace',
          color: "#d4d4d4",
          lineHeight: "21px",
          paddingRight: "16px",
          backgroundColor: "transparent",
          outline: "none",
          whiteSpace: "pre",
          overflowWrap: "normal",
          overflow: "visible",
        }}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    );
  }

  // If no highlighting, render as editable textarea
  return (
    <textarea
      ref={textareaRef}
      value={content}
      onChange={(e) => handleContentChange(e.target.value)}
      spellCheck={false}
      style={{
        flex: 1,
        fontSize: "14px",
        fontFamily: 'Consolas, "Courier New", monospace',
        color: "#d4d4d4",
        lineHeight: "21px",
        paddingRight: "16px",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        resize: "none",
        whiteSpace: "pre",
        overflowWrap: "normal",
      }}
    />
  );
};
