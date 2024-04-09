import React from "react";

interface ListProps {
  type: "ordered" | "unordered";
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ type, children }) => {
  if (type === "ordered") {
    return (
      <ol className="content-container list-decimal list-inside">{children}</ol>
    );
  }
  return (
    <ul className="content-container list-disc list-inside">{children}</ul>
  );
};
