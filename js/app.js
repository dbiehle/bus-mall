'use strict';

//Select three random photos from the image directory and display them side-by-side-by-side in the browser window.

var randomImageGenerated, imageLeft, imageRight, imageCenter;

var imageList = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];


var bag = new ImageObject('bag.jpg', 'R2D2 Luggage');
var banana = new ImageObject('banana.jpg', 'Banana Slicer');
var bathroom = new ImageObject('bathroom.jpg', 'Bathroom Tablet Caddy');
var boots = new ImageObject('boots.jpg','Toeless Rainboots');
var breakfast = new ImageObject('breakfast.jpg','All-In-One Breakfast Maker');
var bubblegum = new ImageObject('bubblegum.jpg', 'Meatball Bubblegum');
var chair = new ImageObject('chair.jpg', 'No-Sit Chair');
var cthulhu = new ImageObject('cthulhu.jpg', 'Cthulhu Figure');
var dogDuck = new ImageObject('dog-duck.jpg', 'Duck Costume for Dogs');
var dragon = new ImageObject('dragon.jpg', 'Dragon Meat');
var pen = new ImageObject('pen.jpg', 'Plastic Cutlery Pen');
var petSweep = new ImageObject('pet-sweep.jpg', 'Pet Sweep');
var scissors = new ImageObject('scissors.jpg', 'Pizza Scissors');
var shark = new ImageObject('shark.jpg', 'Shark Sleeping Bag');
var sweep = new ImageObject('sweep.png', 'Baby Sweep');
var tauntaun = new ImageObject('tauntaun.jpg', 'Tauntaun Sleeping Bag');
var unicorn = new ImageObject('unicorn.jpg', 'Unicorn Meat');
var usb = new ImageObject('usb.gif', 'USB Tentacle');
var waterCan = new ImageObject('water-can.jpg', 'Self Watering Can');
var wineGlass = new ImageObject('wine-glass.jpg', 'Wine Glass');
var objectList = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];


var imageParent = document.getElementById('images');


function ImageObject (fileName,imageName) {
  this.fileName = fileName;
  this.imageName = imageName;
  this.imageId = imageList.indexOf(fileName);
  this.timesShown = 0;
  this.timesClicked = 0;
}

runSurvey();

var shownArray = [];
var lastShownArray = new Array(3);

function genNewImages () {
  for (var i = 0; i < 3; i++) {
    randomImageGenerated = generateRandomImage();
    shownArray[i] = randomImageGenerated;
    // if (shownArray.includes(randomImageGenerated)) {
    //   console.log(randomImageGenerated);
    //   console.log('Match! Boo!');
    //   i -= 1;
    // } else {
    //   console.log('No match!');
    // }
  }
}

console.log(shownArray);

function runSurvey () {
  genNewImages();
  // imageLeft = generateRandomImage();
  // imageCenter = generateRandomImage();
  // imageRight = generateRandomImage();
  for (var i = 0; i < shownArray.length; i++) {
    renderImage(shownArray[i]);
  }
  // renderImage(imageLeft);
  // renderImage(imageCenter);
  // renderImage(imageRight);
}

//Receive clicks on those displayed images,
//Track those clicks for each image.
imageParent.addEventListener('click', function(event){
  var choice = event.target.getAttribute('id');
  //TODO: add these to event Listener to store the click
  // imageList.indexOf(choice);
  // timesClicked++;
});

function renderImage (imageId) {
  var img = document.createElement('img');
  img.setAttribute('src','images/' + imageId);
  img.setAttribute('id', imageId);
  imageParent.appendChild(img);
}

function generateRandomImage () {
  var index = Math.floor(Math.random() * imageList.length);
  return imageList[index];

}
