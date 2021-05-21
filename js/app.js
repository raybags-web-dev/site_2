"use strict";

import {
  all_jQuery_functionality,
  copyRightYear,
  handleInnerScroll,
} from "./jQuery.js";

// const navBtn = document.querySelector("#nav-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");
const date = document.querySelector(".copyrightYear");
const topBTN = document.querySelector("#myBtn");
const navLogo = document.querySelector(".nav-logo");
// ==== section combination ====
// contact me section
const contactBtn = document.querySelector("#hireMe");
const contactSection = document.querySelector("#contact");
// about me section
const aboutMeBTN = document.querySelector(".aboutMeBTN");
const aboutMeSection = document.querySelector("#about");
// skills section
const skillsBTN = document.querySelector("#mySkills");
const skillsContainer = document.querySelector("#skills");
// video contact section
const btnInVideo = document.querySelector("#inVideoBTN_Contact");
const contactSectionFromVideoSection = document.querySelector(".contact");

export { topBTN, navLogo };

// AOS animation
AOS.init();
// smooth scrolling to contact section
handleInnerScroll(contactBtn, contactSection);
// smooth scrolling about me
handleInnerScroll(aboutMeBTN, aboutMeSection);
// smooth scrolling skills section
handleInnerScroll(skillsBTN, skillsContainer);
// smooth scrolling to contact section from video section
handleInnerScroll(btnInVideo, contactSectionFromVideoSection);
// set year
copyRightYear(date);
// All Jquery
all_jQuery_functionality();
