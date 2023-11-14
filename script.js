"use strict";

// document.getElementById("imageContainer").addEventListener("mouseover", function() {
//     console.log("this is clicked");
// })

// $(document).ready(function () {
//   if (window.location.hash) {
//     //bind to scroll function
//     $(document).scroll(function () {
//       var hash = window.location.hash;
//       var hashName = hash.substring(1, hash.length);
//       var element;

//       //if element has this id then scroll to it
//       if ($(hash).length != 0) {
//         element = $(hash);
//       }
//       //catch cases of links that use anchor name
//       else if ($('a[name="' + hashName + '"]').length != 0) {
//         //just use the first one in case there are multiples
//         element = $('a[name="' + hashName + '"]:first');
//       }

//       //if we have a target then go to it
//       if (element != undefined) {
//         window.scrollTo(0, element.position().top);
//       }
//       //unbind the scroll event
//       $(document).unbind("scroll");
//     });
//   }
// });

// --------------------------
// SMOOTH SCROLLINGH
// --------------------------

const allLinks = document.querySelectorAll("a.LinksToPageSections");
const workingLinks = document.getElementsByClassName("projectLink");
// const allLinks = document.getElementsByClassName("navButton");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#aboutSection")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#aboutSection" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

// ------------------------------------------------------

// document
//   .querySelector(".imageContainer")
//   .addEventListener("mouseover", function () {
//     document.getElementById("githubLogo").classList.add("githubLogo2");
//   });

// document
//   .querySelector(".projectDescription")
//   .addEventListener("mouseover", function () {
//     document.getElementById("githubLogo").classList.remove("githubLogo2");
//   });

//adding the sticky class when it scrolls into the right view

//intersection observer
// const sectionHeroEl = document.querySelector(".heroContainer");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//       document;
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//       document;
//     }
//   },
//   {
//     // inside the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-90px", //fire when the heroContainer is not in the viewport
//   }
// );

// obs.observe(sectionHeroEl);

