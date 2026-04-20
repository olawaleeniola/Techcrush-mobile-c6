// src/store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
  // state
  user: {name: "", email: "", age: 0 },

  // Action to update state
  setUser: (newuser: {name: "", email: "", age: 0}) => set({ user: newuser }),
}));

export default useStore;
