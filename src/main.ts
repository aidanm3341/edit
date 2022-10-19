import { app, BrowserWindow } from 'electron';
// import styles from 'styles.module.scss';

function createWindow(): void {
    const win = new BrowserWindow({
        width: 800,
        height: 700,
    });

    win.loadFile('../index.html');
    // win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    app.quit()
})

