"use client";

import React from "react";

export const getLineNumbers = (content: string) => {
  const lines = content.split("\n");
  const extra = 3; // always show 3 extra line numbers past end
  return Array.from({ length: lines.length + extra }).map((_, index) => (
    <div
      key={index}
      style={{
        color: "#858585",
        textAlign: "right",
        userSelect: "none",
        paddingRight: "16px",
        minWidth: "40px",
        height: "21px",
      }}
    >
      {index + 1}
    </div>
  ));
};
