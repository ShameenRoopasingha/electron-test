import { ipcRenderer } from 'electron';

export const ipcInvoke = async <T>(channel: string, ...args: any[]): Promise<T> => {
  try {
    return await ipcRenderer.invoke(channel, ...args);
  } catch (error) {
    console.error(`IPC error on ${channel}:`, error);
    throw error; // Bubble up for UI handling
  }
};

// Example usage in components: ipcInvoke('auth:login', { username: 'test', password: 'pass' })