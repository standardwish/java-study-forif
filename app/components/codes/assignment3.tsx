"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { assignment3 } from "./code";
const Assignment3 = () => {
  return (
    <div>
      <SyntaxHighlighter language="java" style={materialDark}>
        {assignment3}
      </SyntaxHighlighter>
    </div>
  );
};

export default Assignment3;
