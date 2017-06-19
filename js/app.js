'use strict';

//Select three random photos from the image directory and display them side-by-side-by-side in the browser window.

var imageList = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];

var imageLeft, imageRight, imageCenter;

var imageParent = document.getElementById('images');

runSurvey();

function runSurvey () {
  imageLeft = generateRandomImage();
  imageCenter = generateRandomImage();
  imageRight = generateRandomImage();
  renderImage(imageLeft);
  renderImage(imageCenter);
  renderImage(imageRight);
}


function renderImage (imageName) {
  var img = document.createElement('img');
  img.setAttribute('src','images/' + imageName);
  img.setAttribute('id', imageName);
  imageParent.appendChild(img);
}

function generateRandomImage () {
  var index = Math.floor(Math.random() * imageList.length);
  return imageList[index];
}


// addEventListener



//Receive clicks on those displayed images,
//Track those clicks for each image.
