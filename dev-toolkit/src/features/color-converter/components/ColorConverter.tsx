"use client";
import { useState } from "react";
import { Card } from "@/src/shared/components/Card";

export const ColorConverter = () => {
  const [color, setColor] = useState("#007bff");

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <Card title="Color Converter">
      <input
        type="color"
        className="form-control mb-3"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>
        <strong>HEX:</strong> {color}
      </p>
      <p>
        <strong>RGB:</strong> {hexToRgb(color)}
      </p>
    </Card>
  );
};
