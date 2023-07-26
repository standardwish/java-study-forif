"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { mainCode } from "./code";
const MainCode = () => {
  return (
    <div>
      <SyntaxHighlighter language="java" style={materialDark}>
        {mainCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default MainCode;
