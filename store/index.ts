import { create } from "zustand";

interface LaptopState {
  texture: string;
  setTexture: (texture: string) => void;
  reset: () => void;
}

const useLaptopStore = create<LaptopState>((set) => ({
  texture: "/videos/portfolio/mountain-dew.mp4",

  setTexture: (texture: string) => set({ texture }),

  reset: () =>
    set({
      texture: "/videos/portfolio/mountain-dew.mp4",
    }),
}));

export default useLaptopStore;
