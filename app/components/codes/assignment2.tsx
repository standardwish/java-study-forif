"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { assignment2 } from "./code";
const Assignment2 = () => {
  return (
    <div>
      <SyntaxHighlighter language="java" style={materialDark}>
        {assignment2}
      </SyntaxHighlighter>
    </div>
  );
};

export default Assignment2;
