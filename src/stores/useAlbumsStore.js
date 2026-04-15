import { create } from "zustand";

export const useAlbumsStore = create((set) => ({
  currentSong: null,

  setCurrentSong: async (data) => {
    set({ currentSong: data });
  },
}));
