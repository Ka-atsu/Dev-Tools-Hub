"use client"; // <--- ADD THIS LINE

import { Button } from "../shared/components/Button";

export default function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Dev Tools Hub</h1>
      <p>Welcome to my tool collection!</p>

      <Button variant="primary" onClick={() => alert("It works!")}>
        Test Button
      </Button>
    </div>
  );
}
