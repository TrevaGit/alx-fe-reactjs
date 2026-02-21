import { useState } from "react";

export default function useAuth() {
  // Simulate authentication state
  const [isAuthenticated] = useState(true); // change to false to simulate logged out
  return { isAuthenticated };
}
