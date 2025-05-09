"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { fetchWithAuth } from "@/app/utils/Auth";
import { useRouter } from "next/navigation";

export const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // 쿠키 기반 인증 확인
        const cookies = document.cookie;
        console.log("현재 쿠키:", cookies);
        // const response = await fetchWithAuth(`${apiUrl}/api/user/profile`);
        const hasAccessToken = cookies.includes("accessToken=");
        const hasRefreshToken = cookies.includes("refreshToken=");

        if (hasAccessToken || hasRefreshToken) {
          // if (response.ok) {
          // const userData = await response.json();
          console.log("유저인증 성공");
          // setUser(userData);
        } else {
          console.log("유저인증 실패");
          setUser(null);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const logout = async () => {
    try {
      await fetchWithAuth(`${apiUrl}/api/auth/logout`, {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
      router.push("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
