"use client";
import { useState } from "react";
import { Button } from "@/src/shared/components/Button";
import { Card } from "@/src/shared/components/Card";
import { TextArea } from "@/src/shared/components/TextArea";

export const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (err) {
      setError("Invalid JSON input!");
    }
  };

  return (
    <Card title="JSON Formatter">
      <TextArea
        value={input}
        onChange={setInput}
        placeholder="Paste your messy JSON here..."
      />
      {error && <div className="text-danger mb-2">{error}</div>}
      <Button onClick={handleFormat}>Prettify JSON</Button>
    </Card>
  );
};
