import React, { useState, createContext, ReactNode } from "react";
import api from "../services/api";
import { router } from "expo-router";

interface User {
  id: string;
  email: string;
  name: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  signUp: (data: SignUpData) => void;
  signIn: (email: string, password: string) => void;
  loading: boolean;
  signed: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}
export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const signed = !!user;

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

  async function signIn(email: string, password: string) {
    setLoading(true);

    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      });
      console.log(response.status);
      const { id, name, token } = response.data;

      const data = {
        id,
        name,
        token,
        email,
      };

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser({ id, name, email });
      router.push("/(drawer)");
      setLoading(false);
    } catch (err) {
      console.log("Error", err);
      alert("Error ao conectar no servidor. Tente novamente.");
      setLoading(false);
    }
    // router.push("/(drawer)");
  }

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, loading, signed }}>
      {children}
    </AuthContext.Provider>
  );
}
