"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { assignment1 } from "./code";
const Assignment = () => {
  return (
    <div>
      <SyntaxHighlighter language="java" style={materialDark}>
        {assignment1}
      </SyntaxHighlighter>
    </div>
  );
};

export default Assignment;
