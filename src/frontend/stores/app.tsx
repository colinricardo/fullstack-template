import { atom } from "jotai";

export const counterAtom = atom(0);

export const incrementCounterAtom = atom(
  (get) => get(counterAtom),
  (get, set) => set(counterAtom, get(counterAtom) + 1)
);

export const decrementCounterAtom = atom(
  (get) => get(counterAtom),
  (get, set) => set(counterAtom, get(counterAtom) - 1)
);
