import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <div className="content-container">
      <p className="my-6 leading-relaxed">{children}</p>
    </div>
  );
};
