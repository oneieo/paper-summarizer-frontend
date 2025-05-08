import { create } from "zustand";

interface AuthState {
  accessToken: string;
  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: "",
  setAccessToken: (token) => set({ accessToken: token }),
}));
