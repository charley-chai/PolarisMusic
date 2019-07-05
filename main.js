const { app, BrowserWindow, ipcMain, TouchBar } = require('electron');
const path = require('path');
const { TouchBarButton, TouchBarSegmentedControl, TouchBarSpacer } = TouchBar;

let state = {
  liked: false,
  added: false,
  playing: false,
  shuffle: false,
  repeat: 0 // 0 -> none, 1 -> repeat 1, 2 -> repeat playlist
};

let mainWindow;

const goBack = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/left@3x.png')
});

const goAhead = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/right@3x.png')
});

const shuffle = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/shuffle@3x.png'),
  click: () => {
    state.shuffle = !state.shuffle;
    mainWindow.webContents.send('main-shuffle', state.shuffle);
    updateTouchBar('shuffle');
  }
});

const repeat = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/repeat-false@3x.png'),
  click: () => {
    state.repeat = (state.repeat + 1) % 3;
    mainWindow.webContents.send('main-repeat', state.repeat);
    updateTouchBar('repeat');
  }
});

const skipAhead = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/skip-ahead@3x.png')
});

const skipBack = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/skip-back@3x.png')
});

const playBtn = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/play@3x.png')
});

const pauseBtn = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/pause-line@3x.png')
});

const addBtn = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/add-line@3x.png')
});

const addedBtn = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/add@3x.png')
});

const likeBtn = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/like@3x.png')
});

const likedBtn = new TouchBarButton({
  icon: path.join(__dirname, '/src/assets/touchbar/liked@3x.png')
});


const person = new TouchBarSegmentedControl({
  segmentStyle: 'separated',
  mode: 'buttons',
  segments: [
    likeBtn,
    addBtn
  ],
  change: () => {
    if (person.selectedIndex === 0) {
      state.liked = !state.liked;
      mainWindow.webContents.send('main-liked', state.liked);
    } else {
      state.added = !state.added;
      mainWindow.webContents.send('main-added', state.added);
    }
    updateTouchBar('person');
  }
})

const control = new TouchBarSegmentedControl({
  segmentStyle: 'separated',
  mode: 'buttons',
  segments: [
    skipBack,
    playBtn,
    skipAhead
  ],
  change: () => {
    if (control.selectedIndex === 0) {
      mainWindow.webContents.send('main-skipBack', '');
    } else if (control.selectedIndex === 1) { // play or pause
      state.playing = !state.playing;
      mainWindow.webContents.send('main-playing', state.playing);
      updateTouchBar('control');
    } else {
      mainWindow.webContents.send('main-skipForward', '');
    }
  }
})

const history = new TouchBarSegmentedControl({
  segmentStyle: 'separated',
  mode: 'buttons',
  segments: [
    goBack,
    goAhead
  ],
  change: () => {
    if (history.selectedIndex === 0) {
      mainWindow.webContents.send('main-goBack', '');
    } else {
      mainWindow.webContents.send('main-goAhead', '');
    }
  }
});

const touchBar = new TouchBar({
  items: [
    history,
    new TouchBarSpacer(),
    shuffle,
    new TouchBarSpacer(),
    control,
    new TouchBarSpacer(),
    repeat,
    new TouchBarSpacer(),
    person
  ]
});

// ipc begin
function updateTouchBar(group) {
  if (group === 'person'){
    if (state.liked && state.added) {
      person.segments = [likedBtn, addedBtn];
    } else if (state.liked && !state.added) {
      person.segments = [likedBtn, addBtn];
    } else if (!state.liked && state.added) {
      person.segments = [likeBtn, addedBtn];
    } else {
      person.segments = [likeBtn, addBtn];
    } 
  } else if (group === 'control') {
    if (state.playing) {
      control.segments = [skipBack, pauseBtn, skipAhead];
    } else {
      control.segments = [skipBack, playBtn, skipAhead];
    }
  } else if (group === 'shuffle') {
    shuffle.icon = state.shuffle ? 
      path.join(__dirname, '/src/assets/touchbar/shuffle-true@3x.png') :
      path.join(__dirname, '/src/assets/touchbar/shuffle@3x.png');
  } else if (group === 'repeat') {
    if (state.repeat === 0)
      repeat.icon = path.join(__dirname, '/src/assets/touchbar/repeat-false@3x.png');
    else if (state.repeat === 1)
      repeat.icon = path.join(__dirname, '/src/assets/touchbar/repeat-true@3x.png');
    else
      repeat.icon = path.join(__dirname, '/src/assets/touchbar/repeat-playlist@3x.png');
  }
}

ipcMain.on('update', (event, arg) => {
  // console.log(arg);
  state = arg;
  updateTouchBar('person');
  updateTouchBar('control');
  updateTouchBar('shuffle');
  updateTouchBar('repeat');
})

ipcMain.on('liked', (event, arg) => {
  state.liked = arg;
  updateTouchBar('person');
})

ipcMain.on('added', (event, arg) => {
  state.added = arg;
  updateTouchBar('person');
})

ipcMain.on('playing', (event, arg) => {
  state.playing = arg;
  updateTouchBar('control');
})

ipcMain.on('shuffle', (event, arg) => {
  state.shuffle = arg;
  updateTouchBar('shuffle');
})

ipcMain.on('repeat', (event, arg) => {
  state.repeat = arg;
  updateTouchBar('repeat');
})
// ipc end

function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 1160,
    height: 720,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    }
  });

  mainWindow.setTouchBar(touchBar);
  mainWindow.loadURL('http://localhost:3000/');
  mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

// 你可以在这个脚本中续写或者使用require引入独立的js文件.   

