"use client"; // Required for Bootstrap components in Next.js

// shared/components/Button.tsx
import { Button as BootstrapButton } from "react-bootstrap";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "outline-secondary";
}

export const Button = ({ children, onClick, variant = "primary" }: Props) => {
  return (
    <BootstrapButton variant={variant} onClick={onClick}>
      {children}
    </BootstrapButton>
  );
};
