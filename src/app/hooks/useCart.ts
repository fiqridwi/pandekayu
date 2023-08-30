import { create } from "zustand";
import Product from "../../../models/product";

type Product = {
	id: number;
	name: string;
	price: number;
};

type CartState = {
	items: Product[];
	addToCart: (item: any) => void;
	removeProduct: (id: any) => void;
};

const useCart = create<CartState>((set) => ({
	items: [],
	addToCart: (newItem) => set((state) => ({ items: [...state.items, newItem] })),
	removeProduct: (id) =>
		set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));

export default useCart;
