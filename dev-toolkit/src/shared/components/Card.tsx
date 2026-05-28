"use client"; // Required for Bootstrap components in Next.js

// shared/components/Card.tsx
import { Card as BootstrapCard } from "react-bootstrap";

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => (
  <BootstrapCard className="shadow-sm mb-4">
    <BootstrapCard.Body>
      {title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
      {children}
    </BootstrapCard.Body>
  </BootstrapCard>
);
