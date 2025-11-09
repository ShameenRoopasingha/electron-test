import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
// -----------------------------------
// Define your custom API bridges here
// -----------------------------------
const api = {
    getAppVersion: () => ipcRenderer.invoke('get-app-version')
};
// -------------------------------------------------------
// Expose the API only when context isolation is enabled
// -------------------------------------------------------
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI);
        contextBridge.exposeInMainWorld('api', api);
    }
    catch (error) {
        console.error(error);
    }
}
else {
    // @ts-ignore (define in global.d.ts)
    window.electron = electronAPI;
    // @ts-ignore (define in global.d.ts)
    window.api = api;
}
