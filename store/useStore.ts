// src/store/useStore.js
import { create } from 'zustand';


const useStore = create((set) => ({
  user: {name: "", email: "", age: 0 },
  name: "",
  setName: (name: string) => set({ name }),
  setUser: (newuser: {name: "", email: "", age: 0}) => set({ user: newuser }),
  //setUser:

}));

// ((set) => ({
//     user: {name: "", email: "", age: 0 },
//     Action to update the user state
//     setUser: (newuser: {name: string, email: string, age: number}) => set({ user: newuser }),
//   }));

export default useStore;
