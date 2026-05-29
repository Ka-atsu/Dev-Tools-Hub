"use client";
import { useState } from "react";
import { Card } from "@/src/shared/components/Card";
import { TextArea } from "@/src/shared/components/TextArea";

export const RegexTester = () => {
  const [text, setText] = useState("");
  const [pattern, setPattern] = useState("");

  const getMatches = () => {
    try {
      const re = new RegExp(pattern, "g");
      return text.replace(re, (match) => `<mark>${match}</mark>`);
    } catch {
      return text;
    }
  };

  return (
    <Card title="Regex Tester">
      <input
        className="form-control mb-3"
        placeholder="Pattern (e.g. \d+)"
        onChange={(e) => setPattern(e.target.value)}
      />
      <TextArea
        value={text}
        onChange={setText}
        placeholder="Paste text to test..."
      />
      <div
        className="p-3 border bg-light"
        dangerouslySetInnerHTML={{ __html: getMatches() }}
      />
    </Card>
  );
};
