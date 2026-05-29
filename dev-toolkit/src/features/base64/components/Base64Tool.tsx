"use client";
import { useState } from "react";
import { Card } from "@/src/shared/components/Card";
import { TextArea } from "@/src/shared/components/TextArea";
import { Button } from "@/src/shared/components/Button";
import { encodeBase64, decodeBase64 } from "../utils/codec";

export const Base64Tool = () => {
  const [text, setText] = useState("");
  const [base64, setBase64] = useState("");

  return (
    <Card title="Base64 Encoder / Decoder">
      <TextArea label="Raw Text" value={text} onChange={(v) => setText(v)} />

      <div className="d-flex gap-2 mb-3">
        <Button onClick={() => setBase64(encodeBase64(text))}>Encode ➔</Button>
        <Button
          variant="secondary"
          onClick={() => setText(decodeBase64(base64))}
        >
          Decode ⇦
        </Button>
      </div>

      <TextArea
        label="Base64 Output"
        value={base64}
        onChange={(v) => setBase64(v)}
      />
    </Card>
  );
};
