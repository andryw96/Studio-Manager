const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1440, height: 900, minWidth: 900, minHeight: 600,
    title: 'Studio Manager', backgroundColor: '#0c1311',
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true },
  });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  // i link esterni si aprono nel browser, non dentro l'app
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('file://')) { e.preventDefault(); shell.openExternal(url); } });
}
Menu.setApplicationMenu(Menu.buildFromTemplate([
  ...(process.platform === 'darwin' ? [{ role: 'appMenu' }] : []),
  { role: 'editMenu' }, { role: 'viewMenu' }, { role: 'windowMenu' },
]));
app.whenReady().then(() => { createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
