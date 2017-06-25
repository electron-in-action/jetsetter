import { app, BrowserWindow } from 'electron';

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 300, height: 600, minWidth: 300, show: false });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
});
