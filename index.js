const path = require('path');
const createp2pnode = require('swenssonp2p');
const { app, BrowserWindow, ipcMain } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { preload: path.join(__dirname, 'preload.js') },
  });

  /* Create a node */
  const node = createp2pnode();

  console.log('Node is up');

  ipcMain.on('p2p/listen', (event, { port }) => {
    node.listen(port, () => {
      win.webContents.send('p2p/listen/success', null);
    });
  });

  ipcMain.on('p2p/connect', (event, { ip, port }) => {
    node.connect(ip, port, () => {
      win.webContents.send('p2p/connect/success', { ip, port });
    });
  });

  ipcMain.on('p2p/broadcast', (event, { data }) => {
    node.broadcast(data);
  });

  ipcMain.on('p2p/broadcast', (event, { id, data }) => {
    node.direct(id, data);
  });

  ipcMain.on('p2p/close', () => {
    node.close(() => {
      win.webContents.send('p2p/connect/success', { ip, port });
    });
  });

  // TODO rebalance

  node.on('connect', ({ nodeId }) => {
    win.webContents.send('p2p/connect', nodeId);
  });

  node.on('disconnect', ({ nodeId }) => {
    win.webContents.send('p2p/disconnect', nodeId);
  });

  node.on('broadcast', ({ origin, message }) => {
    win.webContents.send('p2p/broadcast', { origin, message });
  });

  node.on('direct', ({ origin, message }) => {
    win.webContents.send('p2p/broadcast', { origin, message });
  });

  win.on('close', () => {
    node.close(() => {
      console.log('Node is down');
    });
  });

  win.loadFile('dist/index.html');
};

app.whenReady().then(() => {
  createWindow();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
