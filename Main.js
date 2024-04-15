const {app, BrowserWindow} =require("electron/main")

function createWindow(){
    const win = new BrowserWindow({
        width:800,
        height:600,
        // webpreferences:{

        // }
    });
    win.loadFile('index.html');
}
app.whenReady().then(()=>{
    createWindow();
})