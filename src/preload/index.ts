import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { LoginInput } from '../main/services/authService'

// -----------------------------------
// Define your custom API bridges here
// -----------------------------------

const api = {
  getAppVersion: () => ipcRenderer.invoke('get-app-version')
}

// -------------------------------------------------------
// Expose the API only when context isolation is enabled
// -------------------------------------------------------
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('api', {
      auth: {
        login: (input: LoginInput) => ipcRenderer.invoke('auth:login', input),
        verifyToken: (token: string) => ipcRenderer.invoke('auth:verifyToken', token)
      }
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in global.d.ts)
  window.electron = electronAPI
  // @ts-ignore (define in global.d.ts)
  window.api = api
}
