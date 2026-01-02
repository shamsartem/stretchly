import { contextBridge, ipcRenderer } from 'electron'
import {
  exposeI18next,
  exposeRuntime,
  exposeUtils
} from './utils/context-bridge-exposers.js'

contextBridge.exposeInMainWorld('prebreak', {
  onData: (callback) =>
    ipcRenderer.on('prebreak-data', (_event, payload) => callback(payload)),
  dismiss: () => ipcRenderer.send('dismiss-prebreak')
})

exposeI18next()
exposeRuntime()
exposeUtils()
