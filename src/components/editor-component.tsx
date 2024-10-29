"use client";

import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

function Editor() {
  return (
    <div className="wmde-markdown-var">
      <MarkdownEditor
        className="min-h-[250px] max-h-[500px] overflow-auto"
        value="Hello Markdown!"
      />
    </div>
  );
}

export default Editor;
