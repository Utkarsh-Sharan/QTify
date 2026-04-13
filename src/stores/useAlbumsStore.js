import { create } from "zustand";

export const useAlbumsStore = create((set) => ({
  currentAlbum: [],

  setCurrentAlbum: async (data) => {
    set({ currentAlbum: data });
  },
}));
