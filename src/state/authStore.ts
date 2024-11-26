import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {mmkvStorage} from './storage';

// Interface for the AuthStore
interface IAuthStore {
  user: Record<string, any> | null;
  setUser: (user: Record<string, any>) => void;
  setCurrentUser: (order: Record<string, any>) => void;
  currentOrder: Record<string, any> | null;
  logout: () => void;
}

// Create the Zustand store
export const useAuthStore = create<IAuthStore>()(
  persist(
    set => ({
      user: null,
      currentOrder: null,

      // Set the user
      setUser: (user: Record<string, any>) => set({user}),

      // Set the current order
      setCurrentUser: (order: Record<string, any>) =>
        set({currentOrder: order}),

      // Logout function to clear user data
      logout: () => set({user: null, currentOrder: null}),
    }),
    {
      name: 'auth-storage', // Name of the storage key
      storage: createJSONStorage(() => mmkvStorage), // Use localStorage for persistence
    },
  ),
);
