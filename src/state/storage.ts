import {MMKV} from 'react-native-mmkv';

export const tokenStorage = new MMKV({
  id: 'token-storage',
  encryptionKey: 'some_secret_key',
});

export const storage = new MMKV({
  id: 'app-storage',
  encryptionKey: 'some_secret_key',
});

export const mmkvStorage = {
  setItem: (key: string, value: string): void => {
    storage.set(key, value);
  },
  getItem: (key: string): string | null => {
    return storage.getString(key) ?? null;
  },
  removeItem: (key: string): void => {
    storage.delete(key);
  },
};
