const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    },
    resizable: false
  });
  win.loadURL(url.format({
    pathname: paths(__dirname, './view/index.html'),
    protocol: 'file:',
    slashes: false
  }));

  win.on('closed', () => {
    app.quit();
  });
  win.webContents.openDevTools();
};
Menu.setApplicationMenu(null);

app.on('ready', () => {
  createWindow();
});
