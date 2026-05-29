"use client";

import { useState } from "react";
import { Button } from "@/src/shared/components/Button";
import { Card } from "@/src/shared/components/Card";

export const UUIDGenerator = () => {
  const [uuid, setUuid] = useState<string>("Click button to generate");

  return (
    <Card title="UUID Generator">
      <div className="bg-light p-3 mb-3 border rounded">
        <code>{uuid}</code>
      </div>
      <Button variant="primary" onClick={() => setUuid(crypto.randomUUID())}>
        Generate UUID
      </Button>
    </Card>
  );
};
