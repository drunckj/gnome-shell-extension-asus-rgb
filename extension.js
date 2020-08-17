const Main = imports.ui.main;
const St = imports.gi.St;
const GObject = imports.gi.GObject;
const Gio = imports.gi.Gio;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const Me = imports.misc.extensionUtils.getCurrentExtension();
//const { exec } = require('child_process');
//import { spawn } from "child_process";
const GLib = imports.gi.GLib;
let myPopup;

const MyPopup = GObject.registerClass(
class MyPopup extends PanelMenu.Button {

  _init () {

    super._init(0);

    let icon = new St.Icon({
      //icon_name : 'security-low-symbolic',
      gicon : Gio.icon_new_for_string( Me.dir.get_path() + '/icon.svg'  ),
      style_class : 'system-status-icon',
    });

    this.add_child(icon);
//RED
    let red = new PopupMenu.PopupMenuItem('Red');
    this.menu.addMenuItem(red);
    red.connect('activate', () => {
      check("red");
    });
//BLUE
let blue = new PopupMenu.PopupMenuItem('Blue');
this.menu.addMenuItem(blue);
blue.connect('activate', () => {
  check("blue");
});
//GREEN
let green = new PopupMenu.PopupMenuItem('Green');
this.menu.addMenuItem(green);
green.connect('activate', () => {
  check("green");
});
//yellow
let yellow = new PopupMenu.PopupMenuItem('Yellow');
this.menu.addMenuItem(yellow);
yellow.connect('activate', () => {
  check("yellow");
});
//gold
let gold = new PopupMenu.PopupMenuItem('Gold');
this.menu.addMenuItem(gold);
gold.connect('activate', () => {
  check("gold");
});
//cyan
let cyan = new PopupMenu.PopupMenuItem('Cyan');
this.menu.addMenuItem(cyan);
cyan.connect('activate', () => {
  check("cyan");
});
//PURPLE
let magenta = new PopupMenu.PopupMenuItem('Purple');
this.menu.addMenuItem(magenta);
magenta.connect('activate', () => {
  check("magenta");
});
//white
let white = new PopupMenu.PopupMenuItem('White');
    this.menu.addMenuItem(white);
    white.connect('activate', () => {
      check("white");
    });
//keyboard off
let black = new PopupMenu.PopupMenuItem('Rgb off');
this.menu.addMenuItem(black);
black.connect('activate', () => {
  check("black");
});




    // sub menu
    let subItem = new PopupMenu.PopupSubMenuMenuItem('Brightness');
    this.menu.addMenuItem(subItem);
    let one=new PopupMenu.PopupMenuItem('1');
    let two=new PopupMenu.PopupMenuItem('2');
    let three=new PopupMenu.PopupMenuItem('3');
    subItem.menu.addMenuItem(one, 0);
    one.connect('activate', () => {
      bright("1");
    });
    subItem.menu.addMenuItem(two, 1);
    subItem.menu.addMenuItem(three, 2);
    two.connect('activate', () => {
      bright("2");
    });
    three.connect('activate', () => {
      bright("3");
    });

    //one.connect('activate', () => {
      //bright("1");
    //});
    //one.connect('activate', () => {
     // check("1");
    //});
    
    //let two=new PopupMenu.PopupMenuItem('2');
    //let three=new PopupMenu.PopupMenuItem('3');
    ///this.subItem.menu.addMenuItem(one, 0);
    //this.subItem.menu.addMenuItem(two, 1);
    //this.subItem.menu.addMenuItem(three, 2);
    //one.connect('activate',() => {
      //bright("1");
    //});
    //two.connect('activate',() => {
      //bright("2");
    //});
    //three.connect('activate',() => {
      //bright("3");
    //});

    // you can close, open and toggle the menu with
    // this.menu.close();
    // this.menu.open();
    // this.menu.toggle();
  }
});
//------------------------------------------------------------------------------


//-----------------------------------------------------------------------------
function init() {
}

function enable() {
  myPopup = new MyPopup();
  Main.panel.addToStatusArea('myPopup', myPopup, 1);
}

function disable() {
  myPopup.destroy();
}
function check(command){
  GLib.spawn_command_line_sync("rogauracore "+command);

}

function bright(value){
  GLib.spawn_command_line_sync("rogauracore brightness "+value);
}
