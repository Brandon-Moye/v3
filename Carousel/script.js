"use strict";
// let movingLeft = 0;
// let movingRight = 0;
// let positionTrackerLeft = 0;
// let positionTrackerRight = 0;

// function sliderTesterLeft() {
//   // activatingTheCarousel(positionTrackerLeft,positionTrackerRight,movingLeft,10,-10);

//   console.log("left has been clicked");
//   positionTrackerLeft++;
//   movingLeft = positionTrackerLeft * 20 + positionTrackerRight * -20 + "rem";
//   movingLeft = "translateX(" + movingLeft + ")";
//   document.getElementById("imgContainer").style.transform = movingLeft;
//   // let moveElementByIdLeft = document.getElementById("imgContainer").style.left;
//   console.log(positionTrackerLeft);
// }

// function sliderTesterRight() {
//   // activatingTheCarousel(positionTrackerRight,positionTrackerLeft,movingRight,-10,10);

//   console.log("left has been clicked");
//   positionTrackerRight++;
//   console.log(positionTrackerRight * -20);
//   movingRight = positionTrackerRight * -20 + positionTrackerLeft * 20 + "rem";
//   movingRight = "translateX(" + movingRight + ")";
//   document.getElementById("imgContainer").style.transform = movingRight;
//   // let moveElementByIdRight = document.getElementById("imgContainer").style.left;
//   console.log(positionTrackerRight);
// }

function shellForAddEventListener(
  whichImageToHoverOver,
  imageToAdd,
  imageToRemove1,
  imageToRemove2
) {
  document
    .querySelector(whichImageToHoverOver)
    .addEventListener("mouseover", function () {
      document.getElementById("mainImage").classList.add(imageToAdd);
      document.getElementById("mainImage").classList.remove(imageToRemove1);
      document.getElementById("mainImage").classList.remove(imageToRemove2);
    });
}

shellForAddEventListener(
  ".image1",
  "permaHoverImage1",
  "permaHoverImage2",
  "permaHoverImage3"
);

shellForAddEventListener(
  ".image2",
  "permaHoverImage2",
  "permaHoverImage1",
  "permaHoverImage3"
);

shellForAddEventListener(
  ".image3",
  "permaHoverImage3",
  "permaHoverImage1",
  "permaHoverImage2"
);

// document.querySelector(".image1").addEventListener("mouseover", function () {
//   document.getElementById("mainImage").classList.add("permaHoverImage1");
//   document.getElementById("mainImage").classList.remove("permaHoverImage2");
//   document.getElementById("mainImage").classList.remove("permaHoverImage3");
// });
// document.querySelector(".image2").addEventListener("mouseover", function () {
//   document.getElementById("mainImage").classList.add("permaHoverImage2");
//   document.getElementById("mainImage").classList.remove("permaHoverImage1");
//   document.getElementById("mainImage").classList.remove("permaHoverImage3");
// });
// document.querySelector(".image3").addEventListener("mouseover", function () {
//   document.getElementById("mainImage").classList.add("permaHoverImage3");
//   document.getElementById("mainImage").classList.remove("permaHoverImage1");
//   document.getElementById("mainImage").classList.remove("permaHoverImage2");
// });
