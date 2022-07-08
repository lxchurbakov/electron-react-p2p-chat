const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  send: (event, data) => ipcRenderer.send(event, data),
  on: (event, callback) => ipcRenderer.on(event, callback),
  once: (event, callback) => ipcRenderer.once(event, callback),
  off: (event, callback) => ipcRenderer.removeListener(event, callback),
});
