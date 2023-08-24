import { create } from "zustand";

type CountState = {
	count: number;
	inc: () => void;
};

export const useCount = create<CountState>((set) => ({
	count: 1,
	inc: () => set((state: any) => ({ count: state.count + 1 })),
}));
