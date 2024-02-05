const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

let mainWindow;
let a = 0;

//------------------------------------------------------------------------
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 200,
    webPreferences: {
      preload: path.join(__dirname, 'html/preload.js')
    }
  });

  mainWindow.loadFile('html/choose.html');

  
}


//------------------------------------------------------------------------
//------------------------------------------------------------------------


function createNewWindow() {
  const newWindow = new BrowserWindow({
    width: 300,
    height: 200,
    webPreferences: {
      preload: path.join(__dirname, 'html/preload-main.js')
    }
  });
  
  newWindow.loadFile('html/index.html');
  
}


//------------------------------------------------------------------------
//------------------------------------------------------------------------


app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin'){
    if (a === 0)
    {
      a = 1
      createNewWindow()
    }
    else if (a === 1)
    {
      app.quit()
    }
  }
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});






ipcMain.handle('writeFile', async (event, chemin, contenu) => {
  const { writeFile } = require('fs/promises');

  try {
    await writeFile(chemin, contenu);
    return true;
  } catch (erreur) {
    console.error('Erreur lors de l\'écriture dans le fichier :', erreur);
    throw erreur;
  }
});
