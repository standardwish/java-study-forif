"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cannotFindSymbol } from "../code";
const CannotFindSymbol = () => {
  return (
    <div>
      <SyntaxHighlighter language="java" style={materialDark}>
        {cannotFindSymbol}
      </SyntaxHighlighter>
    </div>
  );
};

export default CannotFindSymbol;
