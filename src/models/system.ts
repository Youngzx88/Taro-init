import { create } from "zustand";
import { produce } from "immer";

export interface SystemState {
  state:{
    token: string
  },
  actions:{
    setToken: ()=>void
  }
}

export const useSystemStore = create<SystemState>((set,get) => ({
  state: {
    token: "old token"
  },
  actions: {
    setToken: () => {
      set(produce(draft => {
        draft.state.token = "new token"
      }))
    }
  }
}))