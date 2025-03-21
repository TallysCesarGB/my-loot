import React, { useState, createContext, ReactNode, useEffect } from "react";
import api from "../services/api";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";

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
  signOut: () => Promise<void>;
  loadingAuth: boolean;
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
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const signed = !!user;

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("@userToken");

      if (storageUser) {
        try {
          router.push("/(drawer)");
          const response: AxiosResponse<User> = await api.get("/me", {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          });
          setUser(response.data);
          setLoading(false);
        } catch (error) {
          setUser(null);
          await AsyncStorage.removeItem("@userToken");
          router.push("/");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setUser(null);
        router.push("/");
      }
    }

    loadStorage();
  }, []);

  async function signUp(data: SignUpData) {
    console.log(data);
    setLoadingAuth(true);
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
        setLoadingAuth(false);
        router.push("/");
      } else {
        console.error("Erro ao cadastrar o usuário", response.status);
        alert("Error ao cadastrar o usuário. Tente novamente.");
      }
    } catch (error) {
      console.log("Error", error);
      alert("Error ao conectar no servidor. Tente novamente.");
      setLoadingAuth(false);
    }
  }

  async function signIn(email: string, password: string) {
    setLoadingAuth(true);

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

      await AsyncStorage.setItem("@userToken", token);
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser({ id, name, email });
      router.push("/(drawer)");
      setLoadingAuth(false);
    } catch (err) {
      console.log("Error", err);
      alert("Error ao conectar no servidor. Tente novamente.");
      setLoadingAuth(false);
    }
    // router.push("/(drawer)");
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
      router.push("../");
    });
  }

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn, loadingAuth, signed, loading, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
