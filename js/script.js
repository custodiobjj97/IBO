import MenuMobile from "./modules/menuMobile.js";
import scrollAnimation from "./modules/scrollAnimation.js";
import ScrollSmooth from "./modules/scrollSmooth.js";

const menu = new MenuMobile('.toggle','.list-menu','.line');
menu.start()


const scroll = new scrollAnimation('.scroll');

scroll.start()

const link = new ScrollSmooth('.nav-footer  a');

link.start()

const menuLink = new ScrollSmooth('.list-menu a');

menuLink.start()