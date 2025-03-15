import React, { useState, createContext, ReactNode } from "react";

interface User {
  name: string;
}

interface AuthContextType {
  user: User;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}
export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({
    name: "Tallys Cesar",
  });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
