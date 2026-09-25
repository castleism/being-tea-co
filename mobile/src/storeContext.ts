import { createContext, useContext } from "react";
import type { BrewState, BrewStore } from "@brew-core";

export const StoreContext = createContext<BrewStore | null>(null);
export const StateContext = createContext<BrewState | null>(null);

export function useBrewStore() {
  const store = useContext(StoreContext);
  if (!store) throw new Error("Brew store is not mounted.");
  return store;
}

export function useBrewState() {
  const state = useContext(StateContext);
  if (!state) throw new Error("Brew state is not mounted.");
  return state;
}
