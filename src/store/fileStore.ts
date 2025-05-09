import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface FileState {
  file: File | null;
  paperId: number;
  setFile: (file: File | null) => void;
  setPaperId: (paperId: number) => void;
}

export const useFileStore = create<FileState>()(
  persist(
    (set) => ({
      file: null,
      paperId: 0,
      setFile: (file) => set({ file }),
      setPaperId: (paperId) => set({ paperId }),
    }),
    {
      name: "paper-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        paperId: state.paperId,
      }),
    }
  )
);
