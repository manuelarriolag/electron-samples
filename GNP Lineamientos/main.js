// Declaramos el uso del paquete Electron
const electron = require('electron')

// Cargamos dinámicamente Electron sobre app y BrowserWindow
const {app, BrowserWindow} = electron

// Declaramos el uso de acceso a carpetas, archivos y URLs
const path = require('path')
const url = require('url')

// Declaramos el uso de una variable global
let win

// La función abre index.html
function createWindow(){
	win = new BrowserWindow({width: 640, height: 480})
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))
}

// Al cargar nuestra aplicación, llamamos a createWindow
app.on('ready', createWindow)