const package = require("./package.json");
const fs = require('fs');
const gui = require('nw.gui');
var fsStat = false

window.onload = function () {

  var title = document.getElementsByTagName('title');
  var toolbarTitle = document.getElementById('toolbar-title');

  title[0].innerHTML = package.window.title + ' - ' + titleString;
  toolbarTitle.innerHTML = package.window.title + ' - ' + titleString;

  if (fsStat == true) {
    fs.stat('./src/config/config.json', function(err, stat) {
      if(err == null) { //Если файл есть
          location.href = "./main-1.html";
      } else if(err.code == 'ENOENT') { //Если файла нет
          location.href = "./first.html";
      } else {
        fs.writeFile("./index.log", "Error: " + err.code);
      }
    });
  }


  // var tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });
  //
  // var menu = new gui.Menu();
  //
  // menu.append(new gui.MenuItem({ type: 'checkbox', label: 'box1' }));
  // tray.menu = menu;


}
