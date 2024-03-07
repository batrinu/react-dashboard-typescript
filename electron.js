import { app, BrowserWindow } from 'electron';


function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // Adjust the URL to where your React app is hosted.
  // For development, it might be localhost:3000.
  mainWindow.loadURL('http://localhost:3000');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);
