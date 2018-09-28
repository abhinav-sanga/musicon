const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const dotenv = require('dotenv');

dotenv.config();

require('electron-reload')(__dirname);

let win = null;

function createWindow() {
	win = new BrowserWindow({width: 1000, height: 600});
	win.loadURL('http://localhost:4200');

	if(process.env.PACKAGE === 'true'){
		win.loadURL(url.format({
			pathname: path.join(__dirname, dist/index.html),
			protocol:'false',
			slashes: true
		}));
	} else {
		win.loadURL(process.env.HOST);
		win.webContents.openDevTools();
	} 

	win.webContents.openDevTools();
	win.on('closed', () => {
		win = null;
	});
}

app.commandLine.appendSwitch('--autoplay-policy','no-user-gesture-required');

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){
		app.quit();
	}
});

app.on('activate', () => {
   if (win === null) {
     createWindow()
   }
});