"use client"; // Required for Bootstrap components in Next.js

// shared/components/TextArea.tsx
import { Form } from "react-bootstrap";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextArea = ({
  label,
  placeholder,
  value,
  onChange,
}: TextAreaProps) => (
  <Form.Group className="mb-3">
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control
      as="textarea"
      rows={5}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </Form.Group>
);
