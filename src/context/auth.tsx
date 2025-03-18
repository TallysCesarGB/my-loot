import React, { useState, createContext, ReactNode } from "react";
import api from "../services/api";
import { router } from "expo-router";
import axios from "axios";

// interface User {
//   name: string;
// }

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  // user: User;
  signUp: (data: SignUpData) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}
export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function signUp(data: SignUpData) {
    console.log(data);
    setLoading(true);
    try {
      const response = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          timeout: 5000,
        }
      );
      console.log(response.status);
      if (response.status >= 200 && response.status < 300) {
        setLoading(false);
        router.push("/");
      } else {
        console.error("Erro ao cadastrar o usuário", response.status);
        alert("Error ao cadastrar o usuário. Tente novamente.");
      }
    } catch (error) {
      console.log("Error", error);
      alert("Error ao conectar no servidor. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ signUp, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
