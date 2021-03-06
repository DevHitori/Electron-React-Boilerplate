const electron = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680
  });

  mainWindow.loadURL(
    isDev ?
    "http://localhost:3000" :
    `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
